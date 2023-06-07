import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiError } from 'src/apis/ApiError';
import { PersonApi } from 'src/apis/PersonApi';

import { Person } from 'src/person';

@Component({
  selector: 'app-personInfoForm',
  templateUrl: './personInfoForm.component.html',
  styleUrls: ['./personInfoForm.component.css']
})
export class PersonInfoFormComponent implements OnInit {
  name = '';
  birthday = '';
  serverSideError?: string;
  dateLimit = Date.now();
  @Output() newPersonEvent = new EventEmitter<Person>();

  constructor(private personApi: PersonApi) {

  }

  ngOnInit() {
  }

  async submitForm(personForm: NgForm) {
    this.serverSideError = undefined; // clear the error message
    try{
      const age = await this.personApi.calculateAge(this.birthday) // promise
      this.newPersonEvent.emit({ name: this.name, age: age })
    }
    catch(error){
      if(error instanceof ApiError){
        this.serverSideError = error.message;
        return
      }

      throw error;
    }

  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonApi } from 'src/apis/personApi';
import { Person } from 'src/person';

@Component({
  selector: 'app-personInfoForm',
  templateUrl: './personInfoForm.component.html',
  styleUrls: ['./personInfoForm.component.css']
})
export class PersonInfoFormComponent implements OnInit {
  name = '';
  birthday = '';

  @Output() newPersonEvent = new EventEmitter<Person>();

  constructor(private personApi: PersonApi) {

  }

  ngOnInit() {
  }

  async submitForm(personForm: NgForm) {
    const age = await this.personApi.calculateAge(this.birthday) // promise
    this.newPersonEvent.emit({ name: this.name, age: age })
  }

}

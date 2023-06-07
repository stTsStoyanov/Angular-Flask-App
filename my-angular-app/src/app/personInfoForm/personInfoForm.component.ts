import { Component, OnInit } from '@angular/core';
import { PersonApi } from 'src/apis/personApi';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-personInfoForm',
  templateUrl: './personInfoForm.component.html',
  styleUrls: ['./personInfoForm.component.css']
})
export class PersonInfoFormComponent implements OnInit {
  name = '';
  birthday = '';

  constructor(private personApi: PersonApi) {

  }

  ngOnInit() {
  }

  submitForm(){
    
  }

}

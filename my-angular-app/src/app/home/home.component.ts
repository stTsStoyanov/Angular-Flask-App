import { Component, OnInit } from '@angular/core';
import { Person } from 'src/person';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Person[] = [];
  constructor() { }


  ngOnInit() {
  }

  addNewPerson(person: Person){
    this.people.push(person);
  }

}

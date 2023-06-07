import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/person';

@Component({
  selector: 'app-personList',
  templateUrl: './personList.component.html',
  styleUrls: ['./personList.component.css']
})
export class PersonListComponent implements OnInit {
  @Input() people:Person[] = [] //get it from outside
  constructor() { }

  ngOnInit() {
  }

}

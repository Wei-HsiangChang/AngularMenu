import { Component, Input, OnInit } from '@angular/core';
import { templateFood } from '../interfaces';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  @Input() lnFood!: templateFood[];

  constructor() { }

  ngOnInit(): void {
  }

}

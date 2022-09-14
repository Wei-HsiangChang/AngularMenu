import { Component, Input, OnInit } from '@angular/core';
import { templateFood } from '../interfaces';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {
  @Input() dnFood!: templateFood[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { templateFood } from '../interfaces';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  @Input() bkFood!: templateFood[];

  constructor() { }

  ngOnInit(): void {
  }

}

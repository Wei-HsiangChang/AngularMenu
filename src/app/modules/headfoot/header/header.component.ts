import { Component, OnInit, Input } from '@angular/core';
import { Changwei } from '../../../changwei';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() hinfo!: Changwei;

  constructor() { }

  ngOnInit(): void {
  }

}

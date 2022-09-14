import { Component, OnInit, Input } from '@angular/core';
import { Changwei } from '../../../changwei';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() finfo!: Changwei;

  constructor() { }

  ngOnInit(): void {
  }

  
}

import { Component } from '@angular/core';
import { Changwei } from './changwei';
import { templateFood } from './interfaces';
import bkData from 'src/assets/data/breakfast.json';
import lnData from 'src/assets/data/lunch.json';
import dnData from 'src/assets/data/dinner.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changwei-A4';

  myInfo: Changwei = {
    stunum: 991623950,
    name: "Wei-Hsiang Chang",
    login: "changwei",
    campus: "Trafalgar",
    assignTitle: "Assignment 4"
  }

  bkFood: templateFood[] = bkData.breakfast;
  lnFood: templateFood[] = lnData.lunch;
  dnFood: templateFood[] = dnData.dinner;

}

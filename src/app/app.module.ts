import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadfootModule } from './modules/headfoot/headfoot.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeadfootModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

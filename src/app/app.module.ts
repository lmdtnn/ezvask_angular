import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatSelectModule} from '@angular/material/select'; 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
],
imports:[
  BrowserModule, 
  BrowserAnimationsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MomentDateModule,
  MatInputModule,
  FormsModule,
  MatButtonModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatAutocompleteModule,
  MatSelectModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { } 
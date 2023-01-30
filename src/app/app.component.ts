import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/da';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMM YYYY'
    },
};

interface Time {
  value: string;
  viewValue: string;
}

interface Weight {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'da-DK'},
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class AppComponent implements OnInit{  
    times: Time[] = [
      {value: '8', viewValue: '08:00'},
      {value: '9', viewValue: '09:00'},
      {value: '10', viewValue: '10:00'},
      {value: '11', viewValue: '11:00'},
      {value: '12', viewValue: '12:00'},
      {value: '13', viewValue: '13:00'},
      {value: '14', viewValue: '14:00'},
      {value: '15', viewValue: '15:00'},
      {value: '16', viewValue: '16:00'},
    ];

    weights: Weight[] = [
      {value: '5', viewValue: '5.00'},
      {value: '10', viewValue: '10.00'},
      {value: '15', viewValue: '15.00'},
      {value: '20', viewValue: '20:00'},
      {value: '50', viewValue: '50:00'},
    ];
    title = 'EzVasks VaskeBestillingsSystem';
    minDate = new Date();

    constructor(private _adapter: DateAdapter<Date>) {this._adapter.setLocale('da');}
    
   
    ngOnInit() {
    
    }

    sendOrder(){
    }

  
  }
  
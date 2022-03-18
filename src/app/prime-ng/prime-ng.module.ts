import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {DialogModule} from 'primeng/dialog';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    DialogModule,
    SplitterModule,
    CardModule,
    TableModule,
    BrowserAnimationsModule

  ],
  exports:[
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    DialogModule,
    SplitterModule,
    CardModule,
    TableModule,
    BrowserAnimationsModule
  ]
})
export class PrimeNgModule { }

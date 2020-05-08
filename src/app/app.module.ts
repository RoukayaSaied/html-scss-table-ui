import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilteredTableComponent } from './filtered-table/filtered-table.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';
import {TableFilterPipe} from '../core/pipes/table-filter.pipe';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatPaginatorModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FilteredTableComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule,

    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

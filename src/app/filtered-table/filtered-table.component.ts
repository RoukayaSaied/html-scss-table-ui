import {Component, OnInit, ViewChild} from '@angular/core';
import {CUSTOMERS} from '../../core/constants/CUSTOMERS';

@Component({
  selector: 'app-filtered-table',
  templateUrl: './filtered-table.component.html',
  styleUrls: ['./filtered-table.component.scss']
})
export class FilteredTableComponent implements OnInit {
  customers = CUSTOMERS;
  isSelected = false;
  constructor() { }

  ngOnInit() {

  }

}

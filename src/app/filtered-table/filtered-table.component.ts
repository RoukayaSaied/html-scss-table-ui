import {Component, OnInit, ViewChild} from '@angular/core';
import {CUSTOMERS} from '../../core/constants/CUSTOMERS';
import {faEllipsisH, faPen, faSort, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filtered-table',
  templateUrl: './filtered-table.component.html',
  styleUrls: ['./filtered-table.component.scss']
})
export class FilteredTableComponent implements OnInit {
  customers = CUSTOMERS;
  isSelected = false;
  customerNumber
  activeCustomerNumber
  sortByAsc = true;
  faSort = faSort;
  trashAlt = faTrashAlt;
  ellipsis = faEllipsisH;
  pen = faPen;

  constructor() { }

  ngOnInit() {
    this.customerNumber = this.customers.length;
    this.activeCustomerNumber = this.customers.filter(item => item.status === 'ACTIVE').length;
  }

  sort(parm) {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.customers.sort((a, b) => {
        return a[parm].localeCompare(b[parm]);
      });
    } else {
      this.sortByAsc = true;
      this.customers.sort((a, b) => {
        return b[parm].localeCompare(a[parm]);
      });
    }
  }


}

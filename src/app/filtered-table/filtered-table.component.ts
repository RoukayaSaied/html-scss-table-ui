import {Component, OnInit, ViewChild} from '@angular/core';
import {CUSTOMERS} from '../../core/constants/CUSTOMERS';
import {faEllipsisH, faPen, faSearch, faSort, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-filtered-table',
  templateUrl: './filtered-table.component.html',
  styleUrls: ['./filtered-table.component.scss']
})
export class FilteredTableComponent implements OnInit {
  customers = CUSTOMERS;
  isSelected = false;
  name = ''
  customerNumber
  activeCustomerNumber
  splicedData
  pageSize: 5;
  sortByAsc = true;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // Font Awesome icons
  faSort = faSort;
  trashAlt = faTrashAlt;
  ellipsis = faEllipsisH;
  pen = faPen;

  constructor() { }

  ngOnInit() {
    this.customerNumber = this.customers.length;
    this.activeCustomerNumber = this.customers.filter(item => item.status === 'ACTIVE').length;

    this.paginator._intl.itemsPerPageLabel = 'Rows per page';
    this.splicedData = this.customers.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
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

  pageChangeEvent(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedData = this.customers.slice(offset).slice(0, event.pageSize);
  }


  onKey(event) { this.name = event.target.value;}

}

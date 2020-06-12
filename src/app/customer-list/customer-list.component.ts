import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Customer} from '../customer';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


const api = 'http://212.39.115.5:8585/genesisrest.svc/v3.0/type/';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {



  tasks;

  dataSource = new MatTableDataSource<any>(this.tasks);

  displayedColumns = ['fields.KEYWORD','action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public snackBar: MatSnackBar, private http: HttpClient, private router: Router) {
  }

  editCustomer(id) {
    this.router.navigate(['/customer-list', id]);
  }

  ngOnInit(): void {
      this.http.get<any>(api + 'Tasks/list').subscribe(data => {
        this.tasks = data;
        this.dataSource.data = this.tasks;
        console.log(data);
      });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, data) => {
        return item.fields.KEYWORD;
    };

  }

}

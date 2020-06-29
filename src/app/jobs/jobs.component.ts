import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';

const api = 'http://212.39.115.5:8585/genesisrest.svc/v3.0/type/';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  tasks;

  dataSource = new MatTableDataSource<any>(this.tasks);

  displayedColumns = ['fields.KEYWORD', 'action', 'list'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public snackBar: MatSnackBar, private http: HttpClient, private router: Router) {
  }

  editCustomer(id) {
    this.router.navigate(['/jobs-list', id]);
  }

  todoList(id) {
    this.router.navigate(['/todo-list', id]);
  }

  ngOnInit(): void {
    this.http.get<any>(api + 'Task/list').subscribe(data => {
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

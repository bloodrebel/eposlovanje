import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router,} from '@angular/router';



const api = 'http://212.39.115.5:8585/genesisrest.svc/v3.0/type/';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {



  tasks;

  dataSource = new MatTableDataSource<any>(this.tasks);

  displayedColumns = ['fields.KEYWORD'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public snackBar: MatSnackBar, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {

    this.route.params.subscribe(data => {
      const id = data['id'];
      this.http.get(`http://212.39.115.5:8585/genesisrest.svc/v3.0/type/task/${id}/dossier/full`).subscribe(tasks => {
        this.tasks = tasks;
        this.dataSource.data = this.tasks.filter(item => item.fields.OBJECTTYPE2 === 'TODO');
        console.log(data);
      });
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, data) => {
        return item.fields.KEYWORD;
    };

  }

}

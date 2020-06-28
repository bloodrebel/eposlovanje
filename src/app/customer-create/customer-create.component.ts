import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  name = '';
  createdAt;
  endedAt;
  eTag;
  foreignEditPermissionRestriction;
  id;





  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  public editCustomer() {

    console.log(this.createdAt);
    console.log(this.endedAt);

      this.http.put(`http://212.39.115.5:8585/genesisrest.svc/v3.0/type/task/${this.id}`, {
        fields: {
          KEYWORD: this.name,
          START_DT: this.createdAt,
          END_DT: this.endedAt
        },
        foreignEditPermissionRestriction: this.foreignEditPermissionRestriction

      }, {
        headers: new HttpHeaders().append('If-Match', this.eTag)
      }).subscribe( data => {
      });
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.http.get(`http://212.39.115.5:8585/genesisrest.svc/v3.0/type/task/${this.id}`, {observe: 'response'}).subscribe(task => {
        this.name = task.body.fields.KEYWORD
        this.createdAt = task.body.fields.START_DT;
        this.endedAt = task.body.fields.END_DT;
        this.eTag = task.headers.get('ETag');
        this.foreignEditPermissionRestriction = task.body.foreignEditPermissionRestriction;
      });
    });

  }

}

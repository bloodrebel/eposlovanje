import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Route} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  name: string = "";
  email: string = "";
  job: string = "";
  address: string = "";
  selectedSource: string = "email";
  selectedGender: string = "male";
  isCompany : boolean = false;
  createdAt = new FormControl(new Date());


  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  public createCustomer() {

  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      const id = data['id'];
      this.http.get(`http://212.39.115.5:8585/genesisrest.svc/v3.0/type/task/${id}`).subscribe(task => {
        this.name = task.fields.KEYWORD;
        this.email = task.fields.GWSPRIORITY;
        console.log(task);
      });
    });
  }

}

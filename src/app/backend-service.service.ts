import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BackendServiceService {

  constructor(private http: HttpClient) { }

   getTasks() {
    return this.http.get('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/Tasks/list');
  }

}

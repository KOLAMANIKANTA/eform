import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class LformService {

  constructor(private httpClient:HttpClient) { }

  public fetchAllEmployees():Observable<IUser[]>{
    let dataURL:string = `https://gist.githubusercontent.com/KOLAMANIKANTA/d288d2da7816a7dea45a5de373346a9d/raw/c893a7a2198d561c34425a89de75eb3023b11e1e/eform.json`;
    return this.httpClient.get<IUser[]>(dataURL).pipe(
      retry(1)
    );
  }
}

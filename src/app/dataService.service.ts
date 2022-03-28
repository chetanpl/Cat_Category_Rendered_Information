import { Injectable } from '@angular/core';
import {UrlConfig} from './../Helper/Config'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ICatConfig } from './Module/ICatConfigModuleResponse';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }

    public get_CatBreadMataData(): Observable<ICatConfig>{
    const completeURl=UrlConfig.Api_endPoint;
      return this.httpClient.get<ICatConfig>(completeURl);
  }
}

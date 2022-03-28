import { Component, OnInit } from '@angular/core';
import {DataServiceService } from '../app/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private serviceService:DataServiceService){
  }
  title = 'List of cat bread';
  catBreadDetails:any;
  
  ngOnInit(): void {
   this.fetchCatRecords();
  }
  fetchCatRecords(){
    this.serviceService.get_CatBreadMataData().subscribe(res=>{
      this.catBreadDetails=res;
   });
  }
}

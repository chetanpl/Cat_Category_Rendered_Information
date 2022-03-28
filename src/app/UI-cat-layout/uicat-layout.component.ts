import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uicat-layout',
  templateUrl: './uicat-layout.component.html',
  styleUrls: ['./uicat-layout.component.scss']
})
export class UICatLayoutComponent implements OnInit {
@Input() catBreadDetails:any;
    constructor() { }
    name='Name:';
     Origin='Origin:';
  ngOnInit(): void {
    console.log(this.catBreadDetails);
  }

}

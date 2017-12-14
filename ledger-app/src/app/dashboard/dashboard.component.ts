import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from './../_services/common-http.service';
import { DashboardService } from './../_services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any[]
  newItem: any = {}
  constructor(private _dashboard: DashboardService) {
    this._dashboard.refresh().subscribe(
      value => {
        this.data = value;
      });
    let subscription = this._dashboard.getMessage().subscribe(
      value => {
        this.data.push(value);
      });
  }

  ngOnInit() {

  }

}

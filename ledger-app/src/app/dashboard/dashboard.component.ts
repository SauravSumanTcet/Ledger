import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonHttpService } from './../_services/common-http.service';
import { DashboardService } from './../_services/dashboard.service';
import { SubscriptionService } from './../_services/subscription.service';
import { LedgerItem } from './../_models/ledger-item';
import { Subscription } from 'rxjs/Subscription';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private ledgerRows: any[];
  private date: Date = new Date();
  private _date = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate()
  private newItem: LedgerItem = new LedgerItem('', '', this._date);
  public subscription: Subscription;
  private getUserData = environment.getUserData;
  constructor(private _dashboard: DashboardService, private _subs: SubscriptionService, private _http: CommonHttpService) {
    this.subscription = this._dashboard.getData().subscribe(value => {
      console.log("all rows", value);
      this.ledgerRows = value;
    });
  }
  ngOnInit() {
    this._dashboard.getAllRows();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addItem(newItem) {
    this._dashboard.addItem(newItem).subscribe(data => { this._dashboard.getAllRows() });
    this.newItem = new LedgerItem('', '', this._date);
  }
  editItem(rowObj) {
    let x = new LedgerItem(rowObj.particulars, rowObj.amount, rowObj.date);
    x._id = rowObj._id;
    this._subs.openEditModal(true, x);
  }
  deleteItem(rowObj) {
    this._dashboard.delelteItem(rowObj._id).subscribe(data => { this._dashboard.getAllRows() });;
  }


}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonFunctionService } from './../_services/common-function.service';
import { SubscriptionService } from './../_services/subscription.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private htmlFunc: CommonFunctionService, private subs: SubscriptionService) {

  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from './../_services/common-function.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private title: string = 'Ledger App';
  li_el
  constructor(private htmlFunc: CommonFunctionService) { }

  ngOnInit() {
    this.li_el = [
      { 'title': 'Dashboard', 'active': true }
      , { 'title': 'Link', 'active': false }
      , { 'title': 'Another Link', 'active': false }
    ];
  }

}

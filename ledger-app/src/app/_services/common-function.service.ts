import { Injectable } from '@angular/core';
import { SubscriptionService } from './subscription.service';
// import { request } from 'https';
@Injectable()
export class CommonFunctionService {
  constructor(private subs: SubscriptionService) { }
  /* Set the width of the side navigation to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  processWitResponse(res) {
    console.log("wit response", res);

    if (res.entities) {
      if (res.entities.intent && res.entities.particular && res.entities.amount_of_money && res.entities.datetime) {
        if (res.entities.intent[0].value) {
          var requestBody = {};
          if(res.entities.particular[0].value){
            requestBody['particulars'] = res.entities.particular[0].value;
          }
          if(res.entities.amount_of_money[0].value){
            requestBody['amount'] = res.entities.amount_of_money[0].value;
          }
          if(res.entities.datetime[0].value){
            requestBody['date'] = res.entities.datetime[0].value;
          }
          return requestBody;
        }
      }
      return null;
    }
    return null;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from './../../environments/environment'
import { CommonHttpService } from './common-http.service';
import { CommonFunctionService } from './common-function.service';
import { DashboardService } from './dashboard.service';

@Injectable()
export class SpeechService {
  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private _http: CommonHttpService, private cfs: CommonFunctionService, private dashboardService: DashboardService) { }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
  sentToWit(query) {
    let wit_url = environment.witapi + query;
    this._http.fetchdata(wit_url).subscribe((data) => {
      let wit_response_processed = this.cfs.processWitResponse(data);
      // if (wit_response_processed) {
      //   if (wit_response_processed['particulars'] && wit_response_processed['amount'] && wit_response_processed['date']){
      //     this.dashboardService.addItem(wit_response_processed);
      //   }          
      //   else
      //     console.log("%c INCOMPLETE DATA TO FILL IN YOUR LEDGER PLS TRY AGAIN!!", "background:red;color:white;");
      // }
      // else
      //   console.log("%c INCOMPLETE DATA TO FILL IN YOUR LEDGER PLS TRY AGAIN!!", "background:red;color:white;");
    });
  }

}
export class Message {
  constructor(public content: string, public sentBy: string) { }
}
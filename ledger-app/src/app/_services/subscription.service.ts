import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubscriptionService {
    constructor() { }
    editModalStatus = new Subject<any>();
    editModalStream$ = this.editModalStatus.asObservable();
    openEditModal(status,i?) {
        this.editModalStatus.next({status:status,value:i});
    }
}

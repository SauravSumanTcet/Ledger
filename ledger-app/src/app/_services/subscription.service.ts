import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubscriptionService {
    constructor() { }
    private subject = new Subject<any>();

    sendMessage(message: string) {
        console.log("setting transcript",message);
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}

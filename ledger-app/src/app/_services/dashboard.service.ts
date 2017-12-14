import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";


@Injectable()
export class DashboardService {
    private data = new Subject<any>();
    anyErrors
    finished
    constructor(private _http: CommonHttpService) {
    }
    /**
     * add item to list of particulars
     */
    addItem(newItem) {
        let url = environment.addData;
        this._http.postdata(url, newItem)
            .subscribe(
            (value) => { this.data.next(value) },
            (error) => { this.anyErrors = true },
            () => this.finished = true
        );
    }

    getMessage(): Observable<any> {
        return this.data.asObservable();
    }
    /**
     * Refresh
     */
    refresh() {
        let url = environment.getUserData;
        return this._http.fetchdata(url);
    }
}

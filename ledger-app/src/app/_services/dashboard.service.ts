import { Injectable } from '@angular/core';
import { CommonHttpService } from './common-http.service';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs";


@Injectable()
export class DashboardService {
    constructor(private _http: CommonHttpService) { }
    public ledgerRow = new Subject<any>();

    public getData(): Observable<any> {
        return this.ledgerRow.asObservable();
    }

    public setData(condition) {
        this.ledgerRow.next(condition);
    }

    public clearData() {
        this.ledgerRow.next();
    }


    /**
     * add item to list of particulars
     */
    addItem(newItem) {
        console.log(newItem)
        let url = environment.addData;
        return this._http.postdata(url, newItem);
    }

    editItem(newVal) {
        let url = environment.editLedgerRow;
        return this._http.putdata(url, newVal);
    }

    delelteItem(itemId) {
        let url = environment.deleteLedgerRow;
        return this._http.deletedata(url+'/'+itemId);
    }
    /**
     * Refresh
     */
    getAllRows() {
        let url = environment.getUserData;
        this._http.fetchdata(url).subscribe(data=>{
            this.setData(data);
        });
    }
}

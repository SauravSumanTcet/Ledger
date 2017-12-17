import { Component } from '@angular/core';
import { SubscriptionService } from './../_services/subscription.service';
import { DashboardService } from './../_services/dashboard.service';
import { LedgerItem } from './../_models/ledger-item'; 
@Component({
    selector: 'app-edit-modal',
    templateUrl: './edit-modal.component.html',
    styleUrls: ['./edit-modal.component.scss']
})
export class EditModal {
    editModalStatus: boolean = false;
    editData: LedgerItem;
    particulars = '';
    amount = '';
    date = '';

    constructor(private _dashboard: DashboardService, private _subs: SubscriptionService) {
        this._subs.editModalStream$.subscribe((val) => {
            this.editModalStatus = val.status;
            this.editData = val.value;
        });
    }
    ngOnInit() {

    }
    closeEdit(){
        this._subs.openEditModal(false);
    }
    edit() {
        this._dashboard.editItem(this.editData).subscribe((val)=>{
            this._dashboard.getAllRows();
        });
        this.closeEdit();
    }
    
}

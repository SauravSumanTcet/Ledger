export class LedgerItem {
    _id;
    particulars;
    amount;
    date;
    
    constructor(particulars,amount,date) {
        this.particulars = particulars;
        this.amount = amount;
        this.date = this.getDate(date);        
    }
    getDate(date) {
        date = new Date(date);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
}
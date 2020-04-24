export class SearchHistory {

    public userID: string;
    public term: string;
    public time: string;

    constructor(searchObj: any) {
        this.userID = searchObj.userID;
        this.term = searchObj.term;
        this.time = new Date().toISOString();
    }
}

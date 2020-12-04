export class UserEvent {
    year: String;
    month: String;
    day: String;
    dayLong: String;
    type: String;
    title: String;
    startTime: String;
    endTime: String;
    userId: String;
    eventId: String;

    // constructor(year:String, month:String, day:String, dayLong:String, type:String, title:String, startTime:String, endTime:String){
    constructor(event){
        this.year =  event.year;
        this.month = event.month;
        this.day = event.day;
        this.dayLong = event.dayLong;
        this.type = event.type;
        this.title = event.title;
        this.startTime = event.startTime;
        this.endTime = event.endTime;
        this.userId = event.userId;
        this.eventId = event.eventId;
    }
}


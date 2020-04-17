export class UserEvent {
    year: number;
    month: number;
    day: number;
    dayLong: String;
    type: String;
    title: String;
    startTime: String;
    endTime: String;

    constructor(year:number, month:number, day:number, dayLong:String, type:String, title:String, startTime:String, endTime:String){
        this.year =  year;
        this.month = month;
        this.day = day;
        this.dayLong = dayLong;
        this.type = type;
        this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

import { CalendarDay } from './calendar-day';

export class CalendarMonth {
    constructor(public monthNum: Number, public monthLong: String, public monthShort: String, public days: CalendarDay[], public year: String){}
}

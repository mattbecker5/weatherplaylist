import { CalendarDay } from './calendar-day';

export class CalendarMonth {
    //"monthNum": month, "monthLong":monthLong[d.getMonth()], "monthShort": monthShort[d.getMonth()], "days":[], "year": year
    monthNum: Number;
    monthLong: String;
    monthShort: String;
    days: CalendarDay[];
    year: String;
}

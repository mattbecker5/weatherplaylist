import { CalendarDay } from './calendar-day';

export class CalendarMonth {
    constructor(
        public monthNum: number, 
        public monthLong: String, 
        public monthShort: String, 
        public days: CalendarDay[], 
        public bufferDays: CalendarDay[], 
        public year: number
        ){}
}


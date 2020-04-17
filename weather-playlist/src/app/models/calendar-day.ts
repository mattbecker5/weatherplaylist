import { UserEvent } from './user-event';

export class CalendarDay {
    constructor(public date: number, public day: String, public events: UserEvent[]){}
}

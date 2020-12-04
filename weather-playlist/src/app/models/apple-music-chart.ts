export class AppleMusicChart {
    chart: string;
    data: any;
    href: string;
    name: string;
    next: string;

    constructor(chart:any){
        this.chart = chart.chart;
        this.data = chart.data;
        this.href = chart.href;
        this.name = chart.name;
        this.next = chart.next;
    }
    
}

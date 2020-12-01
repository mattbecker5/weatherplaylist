import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {
  private topChartsList = [{name:"R&B/Soul"},  
                            {name:"Latino"},
                            {name:"Pop"}, 
                            {name:"Jazz"},
                            {name:"SoundTrack"},
                            {name:"Dance/House"},
                            {name:"Electronic"},
                            {name:"Hip-Hop/Rap"},
                            {name:"Alternative"},
                            {name:"Rock"},
                            {name:"Christian"},
                            {name:"Reggae"},
                            {name:"Country"}, 
                            {name:"Blues"},
                            {name:"Classical"}, 
                            {name:"Holiday"}
                          ];


  constructor() { 

  }

  ngOnInit(): void {
  }

}

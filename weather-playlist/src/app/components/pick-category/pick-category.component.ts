import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrls: ['./pick-category.component.scss']
})
export class PickCategoryComponent implements OnInit {

  public button1HTML: string = 'Rock';
  public button2HTML: string = 'Pop';
  public button3HTML: string = 'Jazz';
  public button4HTML: string = 'Country';
  public button5HTML: string = 'Blues';
  public button6HTML: string = 'Classical';
  public button7HTML: string = 'Funk';
  public button8HTML: string = 'Heavy Metal';
  public buttonCreate;

  constructor() { }

  ngOnInit(): void {
  }

  public createGenreButton(genrePicked: string){
    console.log('Genre Selected: ' + genrePicked);
    const button = this.buttonCreate.createElement('button');
    console.log(this.buttonCreate);
    
  }
}

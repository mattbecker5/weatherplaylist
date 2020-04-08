import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NavComponent } from './nav/nav.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { LargeCalenderComponent } from './large-calender/large-calender.component';
import { FooterComponent } from './footer/footer.component';
import { EventDateComponent } from './event-date/event-date.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PickCategoryComponent } from './pick-category/pick-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    NavComponent,
    CreateEventComponent,
    LargeCalenderComponent,
    FooterComponent,
    EventDateComponent,
    MediaPlayerComponent,
    MusicListComponent,
    MusicCardComponent,
    PickCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

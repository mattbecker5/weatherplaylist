import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { NavComponent } from './components/nav/nav.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { LargeCalenderComponent } from './components/large-calender/large-calender.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventDateComponent } from './components/event-date/event-date.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { PickCategoryComponent } from './components/pick-category/pick-category.component';
import { SmallCalendarComponent } from './components/small-calendar/small-calendar.component';

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
    PickCategoryComponent,
    SmallCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

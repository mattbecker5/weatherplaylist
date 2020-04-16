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
import { CreateDateComponent } from './components/create-date/create-date.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { PickCategoryComponent } from './components/pick-category/pick-category.component';
import { SmallCalendarComponent } from './components/small-calendar/small-calendar.component';
import { PickCategoryButtonComponent } from './components/pick-category-button/pick-category-button.component';
import { PickGenreButtonComponent } from './components/pick-genre-button/pick-genre-button.component';
import { FeaturesComponent } from './components/features/features.component';
import { FunctionalityComponent } from './components/functionality/functionality.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { WeatherDisplaySmallComponent } from './components/weather-display-small/weather-display-small.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    NavComponent,
    CreateEventComponent,
    LargeCalenderComponent,
    FooterComponent,
    CreateDateComponent,
    MediaPlayerComponent,
    MusicListComponent,
    MusicCardComponent,
    PickCategoryComponent,
    SmallCalendarComponent,
    PickCategoryButtonComponent,
    PickGenreButtonComponent,
    FeaturesComponent,
    FunctionalityComponent,
    EventDetailsComponent,
    SideNavbarComponent,
    WeatherDisplaySmallComponent
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

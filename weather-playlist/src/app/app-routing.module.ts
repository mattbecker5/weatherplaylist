import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCreateAccountComponent } from './pages/view-create-account/view-create-account.component';
import { ViewPickGenreNewuserComponent } from './pages/view-pick-genre-newuser/view-pick-genre-newuser.component';
import { ViewHomeComponent } from './pages/view-home/view-home.component';
import { ViewLoginAccountComponent } from './pages/view-login-account/view-login-account.component';
import { ViewMusicappComponent } from './pages/view-musicapp/view-musicapp.component';
import { ViewEventsDetailComponent } from './pages/view-events-detail/view-events-detail.component';
import { ViewCreateEventComponent } from './pages/view-create-event/view-create-event.component';
import { ViewProfilePageComponent } from './pages/view-profile-page/view-profile-page.component';


const routes: Routes = [
  { path:'', redirectTo:'/create-account', pathMatch:'full' },
  { path:'create-account', component: ViewCreateAccountComponent},
  { path:'pick-genre-newuser', component: ViewPickGenreNewuserComponent},
  { path:'home', component: ViewHomeComponent},
  { path:'login-account', component: ViewLoginAccountComponent},
  { path:'musicapp', component: ViewMusicappComponent},
  { path:'events-detail', component: ViewEventsDetailComponent},
  { path:'create-event', component: ViewCreateEventComponent},
  { path:'profile-page', component: ViewProfilePageComponent},
  { path: '**', redirectTo: '/create-account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

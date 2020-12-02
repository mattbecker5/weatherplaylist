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
// import { ViewAppFunctionalityComponent } from './pages/view-app-functionality/view-app-functionality.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path:'', redirectTo:'/create-account', pathMatch:'full' },
  { path:'create-account', component: ViewCreateAccountComponent },
  { path:'pick-genre-newuser', component: ViewPickGenreNewuserComponent, canActivate: [AuthGuard] },
  { path:'home', component: ViewHomeComponent, canActivate: [AuthGuard] },
  { path:'login-account', component: ViewLoginAccountComponent },
  { path:'musicapp', component: ViewMusicappComponent, canActivate: [AuthGuard] },
  { path:'events-detail', component: ViewEventsDetailComponent, canActivate: [AuthGuard] },
  { path:'create-event', component: ViewCreateEventComponent, canActivate: [AuthGuard] },
  { path:'profile-page', component: ViewProfilePageComponent, canActivate: [AuthGuard] },
//   { path:'app-functionality', component: ViewAppFunctionalityComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/create-account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchInfoComponent } from './research-info/research-info.component';
import { ProfileComponent } from './profile/profile.component';
import { CVComponent } from './cv/cv.component';
import { PublicationsComponent } from './publications/publications.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'research', component: ResearchInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cv', component: CVComponent },
  { path: 'publications', component: PublicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

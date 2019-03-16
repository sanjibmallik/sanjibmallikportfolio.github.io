import { BaseComponent } from './home-page/base/base.component';
import { HomeComponent } from './home-page/home/home.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { AboutComponent } from './home-page/about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './home-page/experiences/experiences.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
      path: 'start', component: BaseComponent
  },
  {
    path:'main', component:HomePageComponent
  }

  // {
  //   path: 'start', component: BaseComponent
  // },
  // {
  //   path: 'main', component: HomePageComponent, children: [
  //     {
  //       path: 'home', component: HomeComponent
  //     },

  //     {
  //       path: 'about', component: AboutComponent
  //     },

  //     {
  //       path: 'skills', component: SkillsComponent
  //     },

  //     {
  //       path: 'experiences', component: ExperiencesComponent
  //     },

  //     {
  //       path: 'contact', component: ContactComponent
  //     }
  //   ]
  // },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

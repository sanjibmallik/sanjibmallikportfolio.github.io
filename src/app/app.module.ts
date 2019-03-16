import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { AboutComponent } from './home-page/about/about.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { ProjectsComponent } from './home-page/projects/projects.component';
import { ExperiencesComponent } from './home-page/experiences/experiences.component';
import { HomeComponent } from './home-page/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    ExperiencesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

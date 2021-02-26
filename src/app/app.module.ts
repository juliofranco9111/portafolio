import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { RoutingModule } from './routing.module';
import { NavBarMobileComponent } from './components/nav-bar-mobile/nav-bar-mobile.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorksComponent,
    SkillsComponent,
    ContactComponent,
    NavBarMobileComponent,
    NavButtonComponent,
    LogoComponent,
    UpButtonComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

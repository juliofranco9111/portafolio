import { environment } from '../environments/environment';
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
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

AngularFireModule

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
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgxScrollTopModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

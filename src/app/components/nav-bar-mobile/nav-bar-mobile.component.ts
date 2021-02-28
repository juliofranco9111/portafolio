import { Component } from '@angular/core';
import { DisplayNavService } from './../../services/display-nav.service';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.css']
})
export class NavBarMobileComponent {

  
  constructor( private navService: DisplayNavService) { }

  closeNav(){
    this.navService.isOpen = false;
    this.navService.isShow = false;

  }

 

}

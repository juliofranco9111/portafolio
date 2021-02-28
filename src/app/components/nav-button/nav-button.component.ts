import { DisplayNavService } from './../../services/display-nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styles: [
  ]
})
export class NavButtonComponent {

  constructor( public navService: DisplayNavService) { }
  
  open(){

     
    
    if(!this.navService.isOpen){
      this.navService.isOpen = true;
      this.navService.isShow = true;

    }else{
      this.navService.isOpen = false;
      this.navService.isShow = false; 
    }
    
  }
}

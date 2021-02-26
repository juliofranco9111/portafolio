import { DisplayNavService } from './../../services/display-nav.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styles: [
  ]
})
export class NavButtonComponent implements OnInit {

 
  public isOpen = false;
 

  constructor( private navService: DisplayNavService) { }

  ngOnInit(): void {
  }

  open(){
    
    if(!this.isOpen){
      this.isOpen = true;
      this.navService.isShow = true;

    }else{
      this.isOpen = false;
      this.navService.isShow = false;
    }
    
  }
}

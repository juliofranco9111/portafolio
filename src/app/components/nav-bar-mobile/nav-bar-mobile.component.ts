import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.css']
})
export class NavBarMobileComponent implements OnInit {

  public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(){
    if(!this.isOpen){
      this.isOpen = true;
    }else{
      this.isOpen = false;
    }

    
  }

  close(){
    this.isOpen = false;
  }

}

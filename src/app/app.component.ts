import { DisplayNavService } from './services/display-nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showUpButton = false;

  constructor(public navService: DisplayNavService){
    
  }

  
  onWindowScroll({srcElement}){
    const position = srcElement.defaultView.scrollY;
    
    if(position >= 500){
      this.showUpButton = true;
    }else{
      this.showUpButton = false;
    }
  }



}

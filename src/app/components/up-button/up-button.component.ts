import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-up-button',
  templateUrl: './up-button.component.html',
  styles: [
  ]
})
export class UpButtonComponent implements OnInit {

  constructor( private smooth: SimpleSmoothScrollService) { }

  ngOnInit(): void {
  }

  goTop(){
    this.smooth.smoothScrollToTop({ duration: 500, easing: 'easeInOutCubic' });
  }

}

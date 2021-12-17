import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;

  selectedImgIndex:number = 1;
  @Input() public pictures:string[] = [''];

  constructor() { }

  nextImg(next:number, $event:any){
    $event.preventDefault();
    if (this.selectedImgIndex + next == this.pictures.length) {
      this.selectedImgIndex = 0;
    }
    else if (this.selectedImgIndex + next < 0) {
      this.selectedImgIndex = this.pictures.length -1;
    }
    else{
      this.selectedImgIndex += next;
    }
  }

  ngOnInit(): void {
  }

}

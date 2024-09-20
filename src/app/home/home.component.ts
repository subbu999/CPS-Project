import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeSlideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.6s ease-out', style({ opacity: 0, transform: 'translateY(50px)' })),
      ]),
    ]),
    trigger('fadeSlideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.6s ease-out', style({ opacity: 0, transform: 'translateY(-50px)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  activeSlide = 0;
  constructor() { }
  ngOnInit(): void {
  }
  onSlideChange(swiper: any): void {
    this.activeSlide = ((swiper.detail)[0]).realIndex;
  }
}

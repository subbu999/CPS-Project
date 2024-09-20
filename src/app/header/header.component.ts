import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(-40px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0px)' })),
      transition('void <=> *', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isDropdownActive = false;
  isDDMOpen = false;
  constructor() { }
  toggleDDM(event: MouseEvent) {
    event.stopPropagation();
    this.isDDMOpen = !this.isDDMOpen;
  }
  closeDDM(event: MouseEvent) {
    event.stopPropagation();
    this.isDDMOpen = false;
    this.isDropdownActive = true;
  }
  deActiveActiveClass() {
    this.isDropdownActive = false;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, HostListener } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CPS';
  loading: boolean = true;
  windowScrolled: boolean = false;
  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.scrollY > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.scrollY < 10) {
      this.windowScrolled = false;
    }
  }
  constructor(private router: Router, private viewPortScroller: ViewportScroller) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewPortScroller.scrollToPosition([0, 0]);
      }
    });
  }
  ngOnInit() {
    AOS.init({
      duration: 1000
    });
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }
  onScrollTopClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}

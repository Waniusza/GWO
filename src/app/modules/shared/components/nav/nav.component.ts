import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  hasParent = false;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('ngOnInit');

    // this.activatedRoute.root
    
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log({
          aR: this.router,
          val,
          activatedRoute: this.activatedRoute
        })
        this.hasParent = Math.random() < 0.5;
      }
    })
  }

}

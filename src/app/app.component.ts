import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biocatch-app-test';
  showHome: boolean = true;
  showLogin: boolean = false;

  constructor(private router: Router){
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.showHome = true;
          this.showLogin = false;
        } else {
          this.showHome = false;
        }
      }
    })
    }
}

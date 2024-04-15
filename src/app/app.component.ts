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
  showPay: boolean = false;

  constructor(private router: Router){
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.showHome = true;
          this.showLogin = false;
          this.showPay = false
        } else if(val.url == '/pay') {
            this.showPay = true;
            this.showHome = false;
            this.showLogin = false;
        } else {
          this.showHome = false;
          this.showPay = false
        }
      }
    })
  };
}

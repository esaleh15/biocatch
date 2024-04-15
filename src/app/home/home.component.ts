import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean
   constructor(private router: Router) {
    this.loggedIn = false;
   }

   ngOnInit() {

      let csid = localStorage.getItem('cdSetCsid')
      if(csid === null) {
        this.loggedIn = false
      } else {
        this.loggedIn = true
      };
   };

   logout() {
    localStorage.removeItem('cdSetCsid');
    console.log('deleting cdSetCsid ')
    this.ngOnInit();
   }
}

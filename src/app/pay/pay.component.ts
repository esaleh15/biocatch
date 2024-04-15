import { Component } from '@angular/core';
import { Utils } from '../utils/utils'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  constructor(private utils: Utils, private http: HttpClient) {
    console.log('Loading pageContext: Pay')
   }

  payNow() {
    let body = {
      "customerId": "dummy",
      "action": "MAKE_PAYMENT",
      "customerSessionId": localStorage.getItem("cdSetCsid"),
      "activityType": "LOGIN",
      "uuid": this.utils.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      "brand": "SD",
      "solution": "ATO",
      "iam": "demo@demo.com"
    }
    this.http.post('https://hooks.zapier.com/hooks/catch/1888053/bgwofce', JSON.stringify(body))
            .subscribe( (data) => {
              console.log('Paid Successfully', data)
    }, (error) => {
      console.log('Error' , JSON.stringify(error))
    })
  }

}

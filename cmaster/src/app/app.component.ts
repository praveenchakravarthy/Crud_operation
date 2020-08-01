import { Component, OnInit } from '@angular/core';

import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

export class Customerdetails {
  constructor(
    public name: string,
    public mobileNo: string,
    public email: string,


     ){}
}
export class customerModel {
  name: string;
  mobileNo: string;
  email: string;
 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  
  constructor(private http:HttpClient) {}
 customerModel = new Customerdetails('', '', '')










  onsubmit(a){

console.log(a);
    this.http.post ('http://localhost:3000/customers',a)
    .subscribe((result)=>{
      console.log(result);
     
    }
    )
  }

  
}

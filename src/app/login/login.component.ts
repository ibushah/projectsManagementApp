import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  login(e)
  {
    console.log(e)
    if(e.email=="ibu@gmail.com" && e.password=="123")
    this.route.navigate(['main'])

  }

  routeToForgetPassComponent()
  {
    
    this.route.navigate(['forgotpassword']);
  }

}

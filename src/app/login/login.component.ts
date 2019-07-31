import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import {LoginService} from '../services/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private service:LoginService) { }

  ngOnInit() {
  }

  login(e)
  {
    sessionStorage.clear();
    this.service.login(e.email, e.password).subscribe((res) => {
      console.log('toker', res);
     
      sessionStorage.setItem('token', res.result.token);
      var username = sessionStorage.setItem('username', res.result.username);
      var userType = sessionStorage.setItem('userType',res.result.userType);
     
      // this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Login Succesful' });
      setTimeout(() => {
        this.route.navigate(['main']);
      }, 1000);
    }, error => {
      console.log(error);
      // this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Wrong username and password' });
    });

  }

  routeToForgetPassComponent()
  {
    
    this.route.navigate(['forgotpassword']);
  }

}

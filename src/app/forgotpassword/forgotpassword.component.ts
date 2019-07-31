import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  submit(e) {
    console.log(e)

    this.service.forgotPassword(e).subscribe((response) => {
      console.log(response)
      
    },(error)=>{
      console.log(error)
    })



  }

}

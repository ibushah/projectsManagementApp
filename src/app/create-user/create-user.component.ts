import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ManageaccountsComponent } from '../manageaccounts/manageaccounts.component'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  email;
  value;
  constructor(private service: AuthService, private manageAccount: ManageaccountsComponent) { }
  display = false;
  ngOnInit() {
  }


  showDialog() {
    this.display = true;
  }

  submit() {
    let obj={
      email: this.email
    };
    
     (this.value)?obj["userType"]="ADMIN": obj["userType"]="USER";

    this.service.createNewUser(obj).subscribe((response) => {
      console.log(response)
      this.display = false;
      this.manageAccount.responseMapping();
    }, (error) => {
      console.log(error);
    })
  }
}


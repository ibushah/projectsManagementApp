import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services/auth.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manageaccounts',
  templateUrl: './manageaccounts.component.html',
  styleUrls: ['./manageaccounts.component.css']
})
export class ManageaccountsComponent implements OnInit {
  dropItems;

  users = [];

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit() {

    this.dropItems = [
      { label: 'Manage accounts', value: null },
      { label: 'Change Password', value: "changePassword" },
      { label: 'Logout', value: "logout" },
    ];

    // this.users=[
    //   {email:'ibu@gmail.com'},
    //   {email:'amer@gmail.com'},
    //   {email:'ali@gmail.com'},
    //   {email:'asad@gmail.com'},
    //   {email:'huzaifa@gmail.com'},
    // ]

    this.responseMapping();


  }

  responseMapping() {
    this.users = [];
    this.service.getAllUsers().subscribe((response) => {
      var obj;
      console.log(response)
      response.map((v) => {
        obj = {
          email: v.email,
          id: v.id
        }
        this.users.push(obj)
      })

    })
  }



  showTable() {

  }

  deleteUser(id) {
    this.service.deleteUser(id).subscribe((response) => {
      console.log(response)
      this.responseMapping();
    }, (error) => {
        console.log(error)
      })
  }

  dropdownchange(e) {
    console.log(e)

    if (e.value === "changePassword")
      this.router.navigate(['/changepassword']);
    else if (e.value === "logout")
      this.router.navigate(['/']);

  }
  routeToMainComponent() {
    this.router.navigate(['/main']);
  }
}

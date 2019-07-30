import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-manageaccounts',
  templateUrl: './manageaccounts.component.html',
  styleUrls: ['./manageaccounts.component.css']
})
export class ManageaccountsComponent implements OnInit {
  dropItems;

  users;

  constructor(private router: Router) { }

  ngOnInit() {

    this.dropItems = [
      { label: 'Manage accounts', value: null },
      { label: 'Change Password', value: "changePassword" },
      { label: 'Logout', value: "logout" },
    ];

    this.users=[
      {email:'ibu@gmail.com'},
      {email:'amer@gmail.com'},
      {email:'ali@gmail.com'},
      {email:'asad@gmail.com'},
      {email:'huzaifa@gmail.com'},
    ]
  }



  
  showTable() {

  }

  dropdownchange(e)
  {
    console.log(e)
    
     if(e.value==="changePassword")
    this.router.navigate(['/changepassword']);
    else if(e.value==="logout")
    this.router.navigate(['/']);

  }
  routeToMain()
  {
    this.router.navigate(['/main']);
  }
}

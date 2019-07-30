import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-projectdetailcomponent',
  templateUrl: './projectdetailcomponent.component.html',
  styleUrls: ['./projectdetailcomponent.component.css']
})
export class ProjectdetailcomponentComponent implements OnInit {

  dropItems;
  constructor(private router: Router) { }

  ngOnInit() {
    this.dropItems = [
      { label: 'Options', value: null },
      { label: 'Manage accounts', value: "manageAccounts" },
      { label: 'Change Password', value: "changePassword" },
      { label: 'Logout', value: "logout" },
    ];

  }

  dropdownchange(e)
  {
    
    if(e.value==="manageAccounts")
    this.router.navigate(['/manageaccounts']);
    else if(e.value==="changePassword")
    this.router.navigate(['/changepassword']);
    else if(e.value==="logout")
    this.router.navigate(['/']);

  }

  routeToMainComponent()
  {

    this.router.navigate(['/main']);
  }

}

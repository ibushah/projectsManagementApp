import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-newdatasetcomponent',
  templateUrl: './newdatasetcomponent.component.html',
  styleUrls: ['./newdatasetcomponent.component.css']
})
export class NewdatasetcomponentComponent implements OnInit {
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

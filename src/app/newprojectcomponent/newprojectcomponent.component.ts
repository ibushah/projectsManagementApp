import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-newprojectcomponent',
  templateUrl: './newprojectcomponent.component.html',
  styleUrls: ['./newprojectcomponent.component.css']
})
export class NewprojectcomponentComponent implements OnInit {

  projectStatus:any;
  selectedStatus:any;
  dropItems:any
  constructor(private router: Router) { }

  ngOnInit() {

    this.dropItems = [
      { label: 'Options', value: null },
      { label: 'Manage accounts', value: "manageAccounts" },
      { label: 'Change Password', value: "changePassword" },
      { label: 'Logout', value: "logout" },
    ];

    this.projectStatus=[
      {label:'Select Project Status', value:null},
      {label:'In Progress', value:"progress"},
      {label:'Complete', value:"complete"},
     
  
    ]
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
    this.router.navigate(['main'])
  }

}

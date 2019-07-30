import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-changpassword',
  templateUrl: './changpassword.component.html',
  styleUrls: ['./changpassword.component.css']
})
export class ChangpasswordComponent implements OnInit {

  dropItems;
  constructor(private router: Router) { }

  ngOnInit() {
    this.dropItems = [
      { label: 'Change Password', value: null },
      { label: 'Manage accounts', value: 'manageAccounts' },
      { label: 'Logout', value: "logout" },
    ];
  }




  
  dropdownchange(e)
  {
    console.log(e)
    if(e.value==="manageAccounts")
    this.router.navigate(['/manageaccounts']);
    else if(e.value==="logout")
    this.router.navigate(['/']);

  }
  routeToMain()
  {
    this.router.navigate(['main'])
  }

}

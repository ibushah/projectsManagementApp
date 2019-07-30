import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  dropItems: any = [];
  selectedOption: any;
  projectCol: any;
  datasetCol:any;
  projectData: any;
  datasetData:any;
  projectBtn = "unselected ";
  datasetBtn = "selected";
  projectBtnDisabled=true;
  datasetBtnDisabled=false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.dropItems = [
      { label: 'Options', value: null },
      { label: 'Manage accounts', value: "manageAccounts" },
      { label: 'Change Password', value: "changePassword" },
      { label: 'Logout', value: "logout" },
    ];

    this.showTable();
  }


  showTable() {
    this.projectCol = [
      { field: 'project', header: 'Project' },
      { field: 'creator', header: 'Creator' },
      { field: 'status', header: 'Status' },
      { field: 'creation_date', header: 'Creation date' }

    ];

    this.datasetCol = [
      { field: 'dataset', header: 'Dataset' },
      { field: 'creator', header: 'Creator' },
      { field: 'fromat', header: 'Format' },
     

    ];

    this.projectData = [
      {project:"ABC",
      creator:"XYX",
      status:"RUNNING",
      creation_date:"1223"


    }
    ];
  }

  showProjects() {
    this.datasetBtn = "selected";
    this.projectBtn = "unselected";
    this.projectBtnDisabled=true;
    this.datasetBtnDisabled=false;
    console.log("seletcdd proje")
  }

  showDatasets() {
    this.projectBtnDisabled=false;
    this.datasetBtnDisabled=true;
    this.projectBtn = "selected";
    this.datasetBtn = "unselected";
    console.log("Seected show data")
   
  }
  back()
  {
    console.log("clicke")
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

  routeToNewProjectComponent()
  {
    this.router.navigate(['/newproject']);
  }
  routeToNewDatasetComponent()
  {
    this.router.navigate(['/newdataset']);
  }

}

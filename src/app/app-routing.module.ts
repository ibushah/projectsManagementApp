import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {MainComponent} from './main/main.component';
import {ProjectdetailcomponentComponent} from './projectdetailcomponent/projectdetailcomponent.component'
import {NewdatasetcomponentComponent} from './newdatasetcomponent/newdatasetcomponent.component'
import {NewprojectcomponentComponent} from './newprojectcomponent/newprojectcomponent.component'
import {ManageaccountsComponent} from './manageaccounts/manageaccounts.component'
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'
import {ChangpasswordComponent} from './changpassword/changpassword.component'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'manageaccounts',component:ManageaccountsComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'projectdetail',component:ProjectdetailcomponentComponent},
  {path:'newproject',component:NewprojectcomponentComponent},
  {path:'newdataset',component:NewdatasetcomponentComponent},
  {path:'changepassword',component:ChangpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

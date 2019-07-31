import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {MainComponent} from './main/main.component';
import { AuthGuard } from "./auth.guard";
import {ProjectdetailcomponentComponent} from './projectdetailcomponent/projectdetailcomponent.component'
import {NewdatasetcomponentComponent} from './newdatasetcomponent/newdatasetcomponent.component'
import {NewprojectcomponentComponent} from './newprojectcomponent/newprojectcomponent.component'
import {ManageaccountsComponent} from './manageaccounts/manageaccounts.component'
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'
import {ChangpasswordComponent} from './changpassword/changpassword.component'

const routes: Routes = [
  {path:'',  component:LoginComponent},
  {path:'main',  canActivate: [AuthGuard],component:MainComponent},
  {path:'manageaccounts',  canActivate: [AuthGuard],component:ManageaccountsComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'projectdetail',  canActivate: [AuthGuard],component:ProjectdetailcomponentComponent},
  {path:'newproject',  canActivate: [AuthGuard],component:NewprojectcomponentComponent},
  {path:'newdataset',  canActivate: [AuthGuard],component:NewdatasetcomponentComponent},
  {path:'changepassword',  canActivate: [AuthGuard],component:ChangpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
// import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import {MessageService} from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MainComponent } from './main/main.component';
import { ManageaccountsComponent } from './manageaccounts/manageaccounts.component';
import { NewprojectcomponentComponent } from './newprojectcomponent/newprojectcomponent.component';
import { ProjectdetailcomponentComponent } from './projectdetailcomponent/projectdetailcomponent.component';
import { NewdatasetcomponentComponent } from './newdatasetcomponent/newdatasetcomponent.component';
import { ChangpasswordComponent } from './changpassword/changpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    MainComponent,
    ManageaccountsComponent,
    NewprojectcomponentComponent,
    ProjectdetailcomponentComponent,
    NewdatasetcomponentComponent,
    ChangpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    TableModule,
    BrowserAnimationsModule,
    TabMenuModule,
    FormsModule,
   
    PanelModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [ MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

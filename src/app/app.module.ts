import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
// import { CalendarModule } from 'primeng/calendar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './request.intercept';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageService } from 'primeng/api';
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
import {CheckboxModule} from 'primeng/checkbox';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

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
    ChangpasswordComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    TableModule,
    BrowserAnimationsModule,
    TabMenuModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    PanelModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    ToastModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  },    ManageaccountsComponent, MessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

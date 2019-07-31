import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() id:any;
  display=false;
  userType="USER";
  value;
  user="";
  constructor(private service:AuthService) { }

  ngOnInit() {
    
  }
  showDialog() {
    console.log(this.id)
    this.service.getUser(this.id).subscribe((response)=>
    {
      console.log(response)
      this.user=response.email;
      response.userType==="ADMIN"?this.value=true:this.value=false;
      this.userType=response.userType;
    },(error)=>
    {
      console.log(error)
    })
    this.display = true;
  }

  submit()
  {
    console.log(this.userType)
    console.log(this.value,"=================")

    let obj={
      email:this.user,
      userType:this.value?"ADMIN":"USER",
      id:this.id,
      active:true
    }
    console.log(obj)
  
    this.service.updateUser(this.id,obj)
    .subscribe((response)=>
    {
      console.log(response)
    },(error)=>
    {
      console.log(error)
    }
    )
  }
}

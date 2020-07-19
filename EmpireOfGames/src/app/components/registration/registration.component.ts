import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService.service';
import { User } from './User.class';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user:User=new User();
  confirmationPassword:string;

  constructor(private router:Router, private userService:UserService,
    private toastr: ToastrService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.user=new User();
  }
  saveUser(){
    if(this.user.firstName !==undefined && this.user.lastName !==undefined && this.user.email !==undefined
    && this.user.username !==undefined && this.user.country !==undefined && this.user.password !==undefined
    && this.user.password == this.confirmationPassword){ 
      this.user.role='USER';
    this.userService.register(this.user)
    .subscribe(response=>{
      console.log(response);

    })
    this.router.navigateByUrl('login');
    console.log(this.user);
    
    
  } 
 else if(this.user.password !== this.confirmationPassword){
   this.toastr.error(this.translate.instant('ErrorPassword'))
 }
 else{
   this.toastr.error(this.translate.instant('EmpatyFields'));
 }
  }
  backToLogin(){
   this.router.navigateByUrl('login');
  }

 

}

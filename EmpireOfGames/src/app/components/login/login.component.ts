import { Component, OnInit } from '@angular/core';
import { User } from '../registration/User.class';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 user:User=new User();
 isLogged:boolean=false;
 
 
  constructor(private router:Router, private userService:UserService,
    private toastr: ToastrService,public translate:TranslateService) { }

  ngOnInit(): void {
    
  }
  login(){
    if(this.user.username && this.user.password){ 
    
 this.userService.login(this.user)
    .subscribe((response:any)=>{ 
    ;
      
      this.user=response;
      console.log(this.user);
      if(this.user[1].message!==undefined){
      delete this.user[0].password;
      localStorage.setItem('loggedUser',JSON.stringify( this.user[0]))
      this.toastr.success(this.translate.instant(this.user[1].message)  );
      this.user=new User();
      this.router.navigateByUrl('home');
  
    }
    else if(this.user[1].messageError){
      this.toastr.error(this.translate.instant(this.user[1].messageError) );
      this.user=new User();
    }
  
  

    
    })
    
   
  }
  else{
    this.toastr.error(this.translate.instant('EmpatyFields'));
    return;
  }
  
  }
  backToSignUp(){
    this.router.navigateByUrl('sign-up');
  }
  
  

}

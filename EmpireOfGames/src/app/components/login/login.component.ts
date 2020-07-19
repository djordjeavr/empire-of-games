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
 users:User[]=[];
 
  constructor(private router:Router, private userService:UserService,
    private toastr: ToastrService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  login(){
    
    if(this.user.username && this.user.password){ 
      for (let i = 0; i < this.users.length; i++) {
        console.log(this.user.username==this.users[i].username && this.user.password==this.users[i].password);
        
        
       if(this.user.username==this.users[i].username && this.user.password==this.users[i].password){ 
     
    this.userService.login(this.user)
    .subscribe((response:User)=>{
      this.user=response;
      
      delete this.user.password;
      localStorage.setItem('loggedUser',JSON.stringify( this.user))
      this.toastr.success(this.translate.instant('LoggedIn')  );
      this.router.navigateByUrl('home');
    })
    break;
  }
  else if(this.user.username!==this.users[i].username || this.user.password!==this.users[i].password){
    this.toastr.error(this.translate.instant('ErrorUsernamePassword'));
    return;
  }
  }
  }
  else{
    this.toastr.error(this.translate.instant('EmpatyFields'));
    return;
  }
  
  }
  backToSignUp(){
    this.router.navigateByUrl('sign-up');
  }
  
  getAllUsers(){
    this.userService.getAllUsers()
    .subscribe((response:User[])=>{
       this.users=response;
    })
  }

}

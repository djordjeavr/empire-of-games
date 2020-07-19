import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService.service';
import { User } from '../registration/User.class';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
user:User=new User();
users:User[]=[];
currentPassword:string;
confirmPassword:string;
  constructor(private userService:UserService,private router:Router,
    private toastr: ToastrService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  updateUser(){
    
    
    if(this.user.password || this.user.email || this.user.username && this.currentPassword){
    for (let i = 0; i < this.users.length; i++) {
    
    if(this.currentPassword==this.users[i].password){ 
      if(this.confirmPassword==this.user.password){ 
    this.user.id=this.userService.loggedUser.id;
  this.userService.updateUser(this.user)
  .subscribe(response=>{
    console.log(response);
    this.user=new User();
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('login');

  })
}
else{
  this.toastr.error(this.translate.instant('ErrorPassword'))
}
    }
 
else if(this.currentPassword!==this.users[i].password){
 this.toastr.error(this.translate.instant('CurrentPassword'))
}
}
}

  }
  getAllUsers(){
    this.userService.getAllUsers()
    .subscribe((response:User[])=>{
       this.users=response;
    })
  }

}

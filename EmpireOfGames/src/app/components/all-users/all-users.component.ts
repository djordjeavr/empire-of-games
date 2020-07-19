import { Component, OnInit, Output } from '@angular/core';
import { User } from '../registration/User.class';
import { UserService } from 'src/app/services/UserService.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users:User[]=[];
  
  constructor(private userService:UserService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllUsers();
    
  }
getAllUsers(){
  this.userService.getAllUsers()
  .subscribe((response:User[])=>{
    this.users=response;
    console.log(this.users);
    
  })
}
}

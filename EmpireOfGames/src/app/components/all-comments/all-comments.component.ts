import { Component, OnInit } from '@angular/core';
import { Commentary } from '../product-item/Commentary.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})
export class AllCommentsComponent implements OnInit {
comments:Commentary[]=[];
  constructor(private restApi:RestApiService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllComments();
  }
getAllComments(){
 this.restApi.getAllComments()
 .subscribe((response:Commentary[])=>{
   this.comments=response;
 
   
 })
}
}

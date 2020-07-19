import { Component, OnInit } from '@angular/core';
import { Genre } from '../games/Genre.class';
import { Platform } from '../Platforms.class';
import { Device } from '../games/Device.class';
import { CategorySoftware } from '../menu/CategorySoftware.class';
import { CategoryGiftCard } from '../menu/CategoryGiftCard.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Feature } from './Feature.class';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-features',
  templateUrl: './add-features.component.html',
  styleUrls: ['./add-features.component.scss']
})
export class AddFeaturesComponent implements OnInit {
  genres:Genre[]=[];
  platforms:Platform[]=[];
  devices:Device[]=[];
  category_software:CategorySoftware[]=[];
  category_gift_cards:CategoryGiftCard[]=[];
  companies:Feature[]=[];
 feature:Feature=new Feature();
  constructor( private restApi:RestApiService,private toastr:ToastrService,
    public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllGenres();
    this.getAllDevices();
    this.getAllPlatforms();
    this.getAllCategoryGiftCards();
    this.getAllCategorySoftware();
    this.getAllCompanies();
  }
  getAllGenres(){
    this.restApi.getAllGenres()
    .subscribe((response:Genre[])=>{
      this.genres=response
    })
  }
  getAllPlatforms(){
    this.restApi.getAllPlatforms()
    .subscribe((response:Platform[])=>{
      this.platforms=response;
      
    })
  }
  getAllDevices(){
    this.restApi.getAllDevice()
    .subscribe((response:Device[])=>{
      this.devices=response
    })
  }
  getAllCategorySoftware(){
    this.restApi.getAllCategorySoftware()
    .subscribe((response:CategorySoftware[])=>{
      this.category_software=response
    })
  }
  getAllCategoryGiftCards(){
    this.restApi.getAllCategoryGiftCards()
    .subscribe((response:CategoryGiftCard[])=>{
      this.category_gift_cards=response;
      console.log(this.category_gift_cards);
      
    })
  }
  getAllCompanies(){
    this.restApi.getAllCompanies()
    .subscribe((response:Feature[])=>{
      this.companies=response;
      
    })
  }
  showArea(event){
    this.feature.isClicked=false;
    this.feature.isClicked1=false;
    this.feature.isClicked2=false;
    this.feature.isClicked3=false;
    this.feature.isClicked4=false;
    this.feature.isClicked5=false;
    if(event.target.getAttribute('index')==1){ 
    this.feature.isClicked=true;
  }
  if(event.target.getAttribute('index')==2){ 
    this.feature.isClicked1=true;
  }
  if(event.target.getAttribute('index')==3){ 
    this.feature.isClicked2=true;
  }
  if(event.target.getAttribute('index')==4){ 
    this.feature.isClicked3=true;
  }
  if(event.target.getAttribute('index')==5){ 
    this.feature.isClicked4=true;
  }
  if(event.target.getAttribute('index')==6){ 
    this.feature.isClicked5=true;
  }
  }
  saveNewFeatures(){
    this.restApi.InsertNewFeatures(this.feature)
    .subscribe(response=>{
     this.toastr.success(this.translate.instant(response['message']))
      this.feature=new Feature();
      this.getAllGenres();
      this.getAllDevices();
      this.getAllPlatforms();
      this.getAllCategoryGiftCards();
      this.getAllCategorySoftware();
      this.getAllCompanies();
      
    })
  }
  deleteFeatures(name,featureId){
   
  console.log(name,featureId);
  this.restApi.deleteFeatures(name,featureId)
  .subscribe(response=>{
    this.toastr.success(this.translate.instant(response['message']) )
    this.getAllGenres();
      this.getAllDevices();
      this.getAllPlatforms();
      this.getAllCategoryGiftCards();
      this.getAllCategorySoftware();
      this.getAllCompanies();
    
  })
  
 
  }

}

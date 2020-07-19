import { Component, OnInit } from '@angular/core';
import { Genre } from './Genre.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Platform } from '../Platforms.class';
import { Product } from '../home/Product.class';
import { SearchProduct } from './SearchProduct.class';
import { Device } from './Device.class';
import { CommonService } from 'src/app/services/CommonService';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-gaming',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
 public  collapsed= { 
   area_hidden:false,
   area_hidden1:false,
   area_hidden2: false,
   area_hidden3: false,
   area_hidden4: false
  }
  genres:Genre[]=[];
  platforms:Platform[]=[];
  devices:Device[];
  searchProducts:SearchProduct;
  checkedGenreIDs = [];
  checkedPlatformIDs=[];
  checkedDevicesIDs=[];
  numberOfProducts:number;

  
  constructor(private restApi:RestApiService,public commonService:CommonService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.commonService.allProducts=[];
    this.searchProducts=new SearchProduct();
    this.getTotalNumberOfGames();
   this.getAllGenres();
  this.getAllPlatforms();
  this.getAllGames();
  this.getAllDevices();
 
  
  
  }

  isCollapsed(event){
   const index=event.target.getAttribute('index');
    if(index==1){
      if(!this.collapsed.area_hidden){
        this.collapsed.area_hidden=true;
      }
      else
   this.collapsed.area_hidden=false;
    }
    if(index==2){
      if(!this.collapsed.area_hidden1){
        this.collapsed.area_hidden1=true;
      }
      else
      this.collapsed.area_hidden1=false;
    }
    if(index==3){
      if(!this.collapsed.area_hidden2){
        this.collapsed.area_hidden2=true;
      }
      else
      this.collapsed.area_hidden2=false;
    }
    if(index==4){
      if(!this.collapsed.area_hidden3){
        this.collapsed.area_hidden3=true;
      }
      else
      this.collapsed.area_hidden3=false;
    }
    if(index==5){
      if(!this.collapsed.area_hidden4){
        this.collapsed.area_hidden4=true;
      }
      else
      this.collapsed.area_hidden4=false;
    }
  }
  
  getAllGenres(){
    this.restApi.getAllGenres()
    .subscribe((response:Genre[])=>{ 
    this.genres=response;
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
      this.devices=response;
    })
  }

  getAllGames(){
    this.restApi.getAllGames()
    .subscribe((response:Product[])=>{
      this.commonService.allProducts=response;
    })
  }

  changeSelectionGenre(){
    this.fetchCheckedGenreIDs();
    this.searchProducts.genreIds=this.checkedGenreIDs.toString();
    this.restApi.searchForGames(this.searchProducts)
 .subscribe((response:Product[])=>{
  this.commonService.allProducts=response
   
 })
 console.log(this.searchProducts);
 
    
  }
  fetchCheckedGenreIDs() {
    this.checkedGenreIDs=[]
    this.genres.forEach(value => {
      if(value.isChecked){
        this.checkedGenreIDs.push(value.id);
      }
    });
  }


changeSelecttionPlatform(){
  this.fetchCheckedPlatformIDs();
  this.searchProducts.platformIds=this.checkedPlatformIDs.toString();
 this.restApi.searchForGames(this.searchProducts)
 .subscribe((response:Product[])=>{
  this.commonService.allProducts=response
   
 })
  
}
fetchCheckedPlatformIDs() {
  this.checkedPlatformIDs=[]
  this.platforms.forEach(value => {
    if(value.isChecked){
      this.checkedPlatformIDs.push(value.id);
    }
  });
}
changeSelecttionDevice(){
 this.fetchCheckedDeviceIDs();
 this.searchProducts.deviceIds=this.checkedDevicesIDs.toString();
 this.restApi.searchForGames(this.searchProducts)
 .subscribe((response:Product[])=>{
  this.commonService.allProducts=response
   
 })
}
fetchCheckedDeviceIDs() {
  this.checkedDevicesIDs=[]
  this.devices.forEach(value => {
    if(value.isChecked){
      this.checkedDevicesIDs.push(value.id);
    }
  });
}

searchAllProducts(){
  
 this.restApi.searchForGames(this.searchProducts)
 .subscribe((response:Product[])=>{
  this.commonService.allProducts=response;
   
   
 })
}
getTotalNumberOfGames(){
  this.restApi.getTotalNumberOfGames()
  .subscribe(response=>{
    this.numberOfProducts=response[0].numberOfGames;
    
  })
  
}


}
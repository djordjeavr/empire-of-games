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
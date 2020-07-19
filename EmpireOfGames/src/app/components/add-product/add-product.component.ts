import { Component, OnInit } from '@angular/core';
import { Product } from '../home/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Genre } from '../games/Genre.class';
import { Platform } from '../Platforms.class';
import { Device } from '../games/Device.class';
import { CategorySoftware } from '../menu/CategorySoftware.class';
import { CategoryGiftCard } from '../menu/CategoryGiftCard.class';
import { Category } from './Category.class';
import { Company } from '../games/Company.class';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product:Product=new Product();
genres:Genre[]=[];
platforms:Platform[]=[];
devices:Device[]=[];
category_software:CategorySoftware[]=[];
category_gift_cards:CategoryGiftCard[]=[];
categories:Category[]=[];
companies:Company[]=[];


  constructor(private restApi:RestApiService, private toastr:ToastrService,
    public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllGenres();
    this.getAllCategories();
    this.getAllDevices();
    this.getAllPlatforms();
    this.getAllCategoryGiftCards();
    this.getAllCategorySoftware();
    this.getAllCompany();
    
    
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
    console.log(this.platforms);
    
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
getAllCategories(){
  this.restApi.getAllCategories()
  .subscribe((response:Category[])=>{
    this.categories=response;
    
    
  })
}
getAllCompany(){
  this.restApi.getAllCompanies()
  .subscribe((response:Company[])=>{
    this.companies=response;
    console.log(this.companies);
    
    
    
  })
}
SaveProduct(){
  if(this.product.name!==undefined&&this.product.description!==undefined&& this.product.price !==undefined&&
  this.product.image!==undefined&&this.product.video!==undefined&&this.product.category_id!==undefined&&
  this.product.smallImage!==undefined&&this.product.region!==undefined){ 
this.restApi.InsertProductInTable(this.product)
.subscribe(response=>{
  this.toastr.success(this.translate.instant( response['message']) );
  this.product=new Product();
  
})
}
else{
  this.toastr.error(this.translate.instant('EmpatyFields'))
}
}

}

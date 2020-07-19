import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchProduct } from '../components/games/SearchProduct.class';
import { CategoryGiftCard } from '../components/menu/CategoryGiftCard.class';
import { CategorySoftware } from '../components/menu/CategorySoftware.class';

import { Commentary } from '../components/product-item/Commentary.class';
import { Basket } from '../components/product-item/Basket.class';
import { Order } from '../components/payment-methods/Order.class';
import { Product } from '../components/home/Product.class';
import { Feature } from '../components/add-features/Feature.class';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  serverUrl: string = environment.serverUrl;
 
  constructor(private http:HttpClient) { }

  getAllProducts(){
     return this.http.get(this.serverUrl+'getAllProduct');
  }
  getAllGenres(){
    return this.http.get(this.serverUrl+'all/genres');
  }
  getAllPlatforms(){
    return this.http.get(this.serverUrl+'all/platforms');
  }
  getAllCategorySoftware(){
    return this.http.get(this.serverUrl+'all/subcategory/software');
  }
  getAllCategoryGiftCards(){
    return this.http.get(this.serverUrl+'all/subcategory/gift-cards');
  }
  getAllGames(){
    return this.http.get(this.serverUrl+'all/games');
 }
 getAllSoftware(){
  return this.http.get(this.serverUrl+'all/software');
}
getAllGiftCards(){
  return this.http.get(this.serverUrl+'all/gift-cards');
}
getAllDevice(){
  return this.http.get(this.serverUrl+'all/devices');
}
searchForGames(searchGames:SearchProduct){
  return this.http.post(this.serverUrl+'games/search',searchGames)
}
searchForSoftware(searchSoftware:SearchProduct){
  return this.http.post(this.serverUrl+'software/search',searchSoftware)
}
searchForGiftCards(searchGiftCards:SearchProduct){
  return this.http.post(this.serverUrl+'search/gift-cards',searchGiftCards)
}
searchSubcategoryGiftCard(searchSubcategory:CategoryGiftCard){
  return this.http.post(this.serverUrl+'subcategory/gift-cards/search',searchSubcategory);
}
searchSubcategorySoftware(searchSubcategory:CategorySoftware){
  return this.http.post(this.serverUrl+'subcategory/software/search',searchSubcategory);
}
getTotalNumberOfGames(){
  return this.http.get(this.serverUrl+'number/games');
}
getTotalNumberOfSoftware(){
  return this.http.get(this.serverUrl+'number/software');
}
getTotalNumberOfGiftCards(){
  return this.http.get(this.serverUrl+'number/gift-cards');
}
searchProducts(nameProduct:string){
  return this.http.post(this.serverUrl+'search/products',{name:nameProduct});
}
getProduct(id:number,category:number){
  return this.http.post(this.serverUrl+'product',{id:id,category:category});
}
getAllCommentaries(productId:number){
  return this.http.get(this.serverUrl+`commentaries?product_id=${productId}`);
}
insertComment(comment:Commentary){
   return this.http.post(this.serverUrl+'insert/comment',comment);
}
insertInBasket(basket:Basket,productSold:number){
  return this.http.post(this.serverUrl+'insert/in-basket',[basket,productSold]);
}
getAllProductFromBasket(userId:number){
  
  return this.http.get(this.serverUrl+`all/product/basket?user_id=${userId}`)
}
getTotalNumberOfProductsInBasket(userId:number){
  return this.http.get(this.serverUrl+`total_number/products/basket?user_id=${userId}`)
}
updateProductsInBasket(basket:Basket){
return this.http.post(this.serverUrl+'update/poducts/basket',basket);
}
deleteProductsinBasket(product:Product){
   return this.http.delete(this.serverUrl+`delete/products/basket?id=${product.id}`)
}
getAllPaymentMethods(){
  return this.http.get(this.serverUrl+'all/payment_methods');
}
saveOrdersForUser(orders:Order[]){
  return this.http.post(this.serverUrl+'save/orders',orders)
}
getAllComments(){
  return this.http.get(this.serverUrl+'all/comments');
}

getAllCategories(){
  return this.http.get(this.serverUrl+'all/categories');
}

updateSoldProduct(product:Product){
  
  return this.http.put(this.serverUrl+`update/product/sold`,product)
}
getAllOrder(userId:number){
  return this.http.get(this.serverUrl+`all/orders?user_id=${userId}`);
}
getBestProducts(){
  return this.http.get(this.serverUrl+`best/products`);
}
InsertProductInTable(products:Product){
  return this.http.post(this.serverUrl+'insert/products',products);
}
getAllCompanies(){
  return this.http.get(this.serverUrl+`all/companies`);
}
InsertNewFeatures(feature:Feature){
  return this.http.post(this.serverUrl+'insert/features',feature);
}
updateProduct(product:Product){
  return this.http.put(this.serverUrl+'update/product',product);
}
deleteFeatures(name:string,featuresId:number){
  return this.http.delete(this.serverUrl+`delete/feature?id=${featuresId}&name=${name}`)
}
deleteProduct(productId:number){
  return this.http.delete(this.serverUrl+`delete/product?id=${productId}`)
}

}

import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webService:WebService) { }

  addProduct(payload:object){
    return this.webService.post('category/add-product', payload);
  }

  getProducts(){
    return this.webService.get('category/products/all');
  }

  getProductsFromCategory(cId:string){
    return this.webService.get(`category/${ cId }/products`);
  }

  //GET particular Product
  getProductWithId(pId:string){
    return this.webService.get(`product/${ pId }`);
  }


  //DELETE product
  deleteProduct(cId:string, pId:string){
    return this.webService.delete(`category/${ cId }/products/${ pId }`);
  }
}

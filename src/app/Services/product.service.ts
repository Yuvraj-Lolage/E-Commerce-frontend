import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webService:WebService) { }

  addProduct(payload:object){
    return this.webService.post("products/create", payload);
  }

  getProducts(){
    return this.webService.get('products');
  }

  getProductsFromCategory(cId:string){
    return this.webService.get(`products/${ cId }`);
  }

  //GET particular Product
  getProductWithId(pId:string){
    return this.webService.get(`products/getById/${ pId }`);
  }


  //DELETE product
  deleteProduct(cId:string, pId:string){
    return this.webService.delete(`category/${ cId }/products/${ pId }`);
  }
}

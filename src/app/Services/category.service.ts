import { Injectable } from '@angular/core';
import { WebService } from './web.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private webService: WebService) { }

  //function to get all Categories
  getCategories(){
    return this.webService.get('category');
  }

  getCategoryId(catName:string){
    return this.webService.get(`category/${ catName }`);
  }
}

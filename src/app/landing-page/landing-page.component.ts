import { Component } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  productList:any;
  categoryList:any;
  categoryId:any;
  isLoading:boolean = true;
    constructor(private categoryService:CategoryService, private activatedRoute:ActivatedRoute, private router:Router, private productService:ProductService){ }

    ngOnInit(){
      this.categoryService.getCategories().subscribe((catList:any) => {
          this.categoryList = catList;
      });

      this.productService.getProducts().subscribe((prodList:any) => {
        this.productList = prodList;
        this.isLoading = false;
      });

      this.activatedRoute.params.subscribe((params: Params) => {
        this.categoryId = params['catId'];
        if(this.categoryId != undefined){
          this.getProductsOfCategory(this.categoryId);
        }

      });
    }


    getProductsOfCategory(cId:any) {
      this.productService.getProductsFromCategory(cId).subscribe((prodList:any) => {
        this.productList = prodList;
      });

    }


}

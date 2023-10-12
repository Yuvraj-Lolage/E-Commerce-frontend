import { Component } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  categoryList:any;
    constructor(private categoryService:CategoryService, private activatedRoute:ActivatedRoute, private router:Router){ }

    ngOnInit(){
      this.categoryService.getCategories().subscribe((catList:any) => {
          this.categoryList = catList;
      });
    }

    // getProductsOfCategory(){
    //   this.activatedRoute.params.subscribe((param:Params) => {
    //     console.log(param['catId']);
    //   });
    // }
    getProductsOfCategory() {
      this.activatedRoute.params.subscribe((params: Params) => {
        console.log('Params:', params);
        console.log('catId:', params['catId']);
      });
    }


}

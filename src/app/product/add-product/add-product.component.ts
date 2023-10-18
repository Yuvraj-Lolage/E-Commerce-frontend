import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  categoryList:any;
  currCategoryId:any;

  pName:String = "";
  pPrice:String = ""
  constructor(private categoryService:CategoryService, private productService:ProductService, private router:Router){
  }

  ngOnInit(){
    this.categoryService.getCategories().subscribe((cats:any)=>{
      this.categoryList = cats;
    })
  }

  getCategoryId(catName:string){
    this.categoryService.getCategoryId(catName).subscribe((selectedat:any)=> {
      this.currCategoryId = selectedat[0]._id;
      console.log(selectedat[0]._id);
  });
  }


  addProduct(pName:String, pPrice: String){
    // POST request to add products
    this.productService.addProduct({name: pName,
                                     _categoryId:this.currCategoryId,
                                     price: pPrice
                                    }).subscribe((addedProduct) => {
                                      console.log(addedProduct);
                                    });
    this.router.navigate(['']);
  }
}

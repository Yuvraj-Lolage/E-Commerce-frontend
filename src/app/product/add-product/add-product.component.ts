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

  categoryList: any;
  currCategoryId: any;

  productName = ""
  pName: String = "";
  pPrice: String = ""
  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((cats: any) => {
      this.categoryList = cats;
    })
  }

  getCategoryId(catName: string) {
    this.categoryService.getCategoryId(catName).subscribe((selectedat: any) => {
      this.currCategoryId = selectedat;
      console.log(this.currCategoryId);
    });
  }


  addProduct(pName: String, pPrice: String) {
    try {
      // POST request to add products
      this.productService.addProduct({
        name: pName,
        _categoryId: this.currCategoryId,
        price: pPrice
      }).subscribe(() => {
        alert("Product Created..!");
      })
      this.router.navigate(['']);
    } catch (error) {
      console.error("error");
    }
  }
}

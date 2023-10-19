import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyLocalStorageService } from 'src/app/Services/my-local-storage.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  product:any;
  currProductId:any;
  currCategoryId:any;
  confirmation:any;
  role:string = "";
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService, private router:Router,
              private storageService:MyLocalStorageService){}

  ngOnInit(){

    // To check User Role
    const email = this.storageService.getItem('email');
    const password = this.storageService.getItem('password');
    if(email?.match("admin@gmail.com") && password?.match("admin")){
      this.role = "admin";
    }
    else{
      this.role = "user";
    }
    //To gate product With ID
    this.activatedRoute.params.subscribe((params:Params) => {
      this.currProductId = params['id'];
      this.productService.getProductWithId(params['id']).subscribe((response:any) => {
        this.product = response;
        this.currCategoryId = response[0]._categoryId;
        console.log("category Id= ",this.currCategoryId);
      });
    });

  }

  deleteProduct(){
    this.confirmation = window.confirm("Do you Want to Delete Product?");
    if(this.confirmation){
      this.productService.deleteProduct(this.currCategoryId, this.currProductId).subscribe(() => {
        console.log("Product Deleted Successfullt");
      });
      this.router.navigate(['../../']);
    }
    else{

    }

  }
}

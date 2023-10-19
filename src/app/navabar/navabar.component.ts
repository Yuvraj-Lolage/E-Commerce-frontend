import { Component } from '@angular/core';
import { MyLocalStorageService } from '../Services/my-local-storage.service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent {
  role:string = ""
  constructor(private storageService:MyLocalStorageService){}

  ngOnInit(){
    const email = this.storageService.getItem('email');
    const password = this.storageService.getItem('password');
    if(email?.match("admin@gmail.com") && password?.match("admin")){
      this.role = "admin";
    }
    else{
      this.role = "user";
    }
    // console.log(this.role);
  }

}

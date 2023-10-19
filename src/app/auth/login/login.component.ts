import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyLocalStorageService } from 'src/app/Services/my-local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private localStorage:MyLocalStorageService) { }

  ngOnInit(): void {
  }

  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  clicked(){
    this.localStorage.setItem("email","admin@gmail.com");
    this.localStorage.setItem("password","admin");
  }
}

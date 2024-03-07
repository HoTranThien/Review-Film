import { Component } from '@angular/core';
import { AuthorService } from '../service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authorservice:AuthorService,private router:Router){}
  users = this.authorservice.users;
  check = false;
  checkpassword(username:any,password:any){
    if((username.value == this.users.username)&&(password.value == this.users.password))
    {
      this.router.navigateByUrl("home");
      this.check = false;
    }
    else this.check = true;
  }
}

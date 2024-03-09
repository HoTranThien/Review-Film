import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

constructor() { }

users = {"username":"htran3","password":"1611213"};
url = "http://localhost:4200/assets/data/data.json";

}

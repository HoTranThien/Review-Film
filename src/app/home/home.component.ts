import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private http: HttpClient, private author:AuthorService){}

  movies:any;
  
  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.http.get(this.author.url).subscribe((mov)=>{this.movies = mov});
  }
}

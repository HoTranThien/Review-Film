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
  trending:any;
  theatre:any;
  viewall = false;
  ngOnInit(): void {
    this.getdata();
    this.trending = this.theatre = this.movies;
    this.movies.forEach((mov:any) => {
      if (!mov.categorize.includes('trending'))
      {
        this.trending?.splice(mov,1);
      }
      if (!mov.categorize.includes('theatre'))
      {
        this.theatre?.splice(mov,1);
      } 
    });
  }
  getdata(){
    this.http.get(this.author.url).subscribe((mov)=>{this.movies = mov});
  }
  changeviewstate(){
    this.viewall = !this.viewall;
  }
}

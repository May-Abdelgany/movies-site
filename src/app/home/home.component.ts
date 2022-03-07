
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any[]=[];
  trendingTv: any[]=[];
  word:string="";
  imagePath: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService: MoviesService ) { }

  ngOnInit(): void {
      this._MoviesService.getTrendingMovie().subscribe((data) => {
      this.trendingMovies = data.results;
    })
    this._MoviesService.getTrendingTv().subscribe((data) => {
      this.trendingTv = data.results;
    })

  }

}

import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id: any;
  details: any;
  genres:any[]=[];
  imagePath: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this._MoviesService.getDetailsMovie(this.id).subscribe((Response) => {
      this.details = Response;
      this.genres=this.details.genres;
    });
    this._MoviesService.getDetailsTv(this.id).subscribe((Response) => {
      this.details = Response;
      this.genres=this.details.genres;
    });
  }



}

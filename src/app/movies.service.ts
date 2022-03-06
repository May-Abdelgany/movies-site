import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  getTrendingMovie(): Observable<any> {

    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=866cd3a065ef9304a549f1d65e494940');
  }
  getTrendingTv(): Observable<any> {

    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=866cd3a065ef9304a549f1d65e494940');
  }
}

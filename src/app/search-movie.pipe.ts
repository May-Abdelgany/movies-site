import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {


  transform(movies:any[],word:any): any {
    return movies.filter(function(movie:any){
      return movie.original_title.toLowerCase().includes(word.toLowerCase());
    })

  }
}

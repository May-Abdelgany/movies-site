import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTv'
})
export class SearchTvPipe implements PipeTransform {

  transform(movies:any[],word:any): any {
    return movies.filter(function(movie:any){
      return movie.original_name.toLowerCase().includes(word.toLowerCase());
    })

  }

}

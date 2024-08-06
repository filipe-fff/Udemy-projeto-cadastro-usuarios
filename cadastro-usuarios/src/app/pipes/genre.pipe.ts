import { Pipe, PipeTransform } from '@angular/core';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  constructor(
    private readonly _genresService:GenresService
  ) {}

  transform(genreId:number):string|null {
    const genre = this._genresService.getGenreDescription(genreId);

    return genre
  }

}

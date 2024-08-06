import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favorite'
})
export class FavoritePipe implements PipeTransform {

  transform(favorite:boolean):string {
    return favorite? 'Sim':'Não';
  }
}
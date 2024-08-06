import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePipe } from './state.pipe';
import { GenrePipe } from './genre.pipe';
import { FavoritePipe } from './favorite.pipe';



@NgModule({
  declarations: [
    StatePipe,
    GenrePipe,
    FavoritePipe,
  ],
  exports: [
    StatePipe,
    GenrePipe,
    FavoritePipe,
  ],
})
export class PipesModule { }

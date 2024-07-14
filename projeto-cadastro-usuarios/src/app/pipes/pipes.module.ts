import { NgModule } from "@angular/core";
import { GenreDescriptionPipe } from './genre-description.pipe';
import { IsFavoriteDescriptionPipe } from './is-favorite-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';

@NgModule({
    declarations: [
        GenreDescriptionPipe,
        IsFavoriteDescriptionPipe,
        StateDescriptionPipe,
    ],

    exports: [
        GenreDescriptionPipe,
        IsFavoriteDescriptionPipe,
        StateDescriptionPipe,
    ],
})
export class PipesModule {}
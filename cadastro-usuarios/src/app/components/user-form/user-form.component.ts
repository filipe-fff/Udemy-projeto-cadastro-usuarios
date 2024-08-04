import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { getProgressBarValue } from '../../utils/getProgressBarValue';
import { provideNativeDateAdapter } from '@angular/material/core';
import { getDateEn } from '../../utils/getDateEn';
import { getDatePtBr } from '../../utils/getDatePtBr';
import { IState } from '../../interfaces/state.interface';
import { IGenre } from '../../interfaces/genre.interface';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [ provideNativeDateAdapter() ],
})
export class UserFormComponent implements OnChanges {
  @Input() userSelected: IUser = {} as IUser;
  @Input() statesList:IState[] = [];
  @Input() genresList:IGenre[] = [];
  @Input() genresListFilter:IGenre[] = [];


  progressBarValue:number = 0;
  userDate:Date|null = new Date();
  userDateMin!:Date;
  userDateMax!:Date;
  userStateDataSource:string[] = ['title', 'band', 'genre', 'favorite'];

  constructor(
    private readonly _elements:ElementRef
  ) {}

  ngOnChanges() {
    this.getProgressBar(this.userSelected.password);
    this.setUserDateEn(this.userSelected.birthDate);
    this.MinAndMaxDate();

    this.genresListFilter = this.genresList;
  }

  // envia o formulario
  onFormSubmit(form:NgForm) {
    if(form.invalid) this.OnInvalidForm(form);
  }

  OnInvalidForm(form:NgForm) {
    for( const control of Object.keys(form.controls) ) {
      if( form.controls[control].invalid ) {
        const invalidConstrol = this._elements.nativeElement.querySelector(`[name=${control}]`);
        invalidConstrol.focus();
        break
      }
    }
  }

  getProgressBar(value:string|undefined) {
    if(value) this.progressBarValue = getProgressBarValue(value);
  }

  // converte a data do portugues de string para o ingles em objeto.
  setUserDateEn(date:string) {
    this.userDate = getDateEn(date);
  }

  // converte a data em ingles de objeto em portugues string.
  setUserDatePtBr(date:Date|null) {
    if(!date) return;

    this.userSelected.birthDate = getDatePtBr(date);

    console.log(this.userSelected.birthDate);
  }

  MinAndMaxDate() {
    this.userDateMin = new Date(new Date().getFullYear()-100, 0, 0, 1);
    this.userDateMax = new Date(new Date().getFullYear(), 0, 1);
  }

  // converte o valor do input de id para descrição.
  idToDescriptionGenre( genreId:number ) {
    const genre = this.genresList.find( genre => genre.id === genreId );

    return genre? genre.description : '';
  }

  // filtra a lista de genero no que está no input.
  OnGenresListFilter( genreInput:string ) {
    if(typeof genreInput === 'number') return;
    
    this.genresListFilter = this.genresList.filter( ( genre ) => {
      return genre.description.toLocaleLowerCase().includes(genreInput.toLocaleLowerCase());
    } )
  }

  // retorna booleano o analize se tem algum chebox marcado.
  isFavoriteChecked() {
    return this.userSelected.musics.some( music => music.isFavorite );
  }
  
}
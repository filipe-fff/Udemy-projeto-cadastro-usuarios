import { Component, OnInit } from '@angular/core';
import { UsersPlaceholderListService } from './services/users-placeholder-list.service';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';
import { IUser } from './interfaces/user/user.interface';
import { GenresService } from './services/genres.service';
import { IGenre } from './interfaces/genre.interface';
import { IState } from './interfaces/state.interface';
import { StatesService } from './services/states.service';
import { IUserPlaceholder } from './interfaces/user-placeholder/user-placeholder.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  
  usersList!: IUser[];
  genresList!: IGenre[];
  statesList!: IState[];
  usersPlaceholderList!: IUserPlaceholder[];
  userIndex!:number;
  userSelected:IUser = {} as IUser;


  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statesService: StatesService,
    private readonly _usersPlaceholderServise: UsersPlaceholderListService,
  ) {}

  ngOnInit() {

    this.getUsers();
    this.getGenres();
    this.getStates();

  }

  private getUsers() {

    this._usersService.getUsersList().subscribe(( usersListResponse) => 
      {
        this.usersList = usersListResponse;
      }
    );
  }
  private getGenres() {
    this._genresService.getGenresList().subscribe(( genresListResponse ) => {
      this.genresList = genresListResponse;
    })
  }
  private getStates() {
    this._statesService.getStatesList().subscribe( (statesListResponse) => {
      this.statesList = statesListResponse;
    } );
  }

  onUserSelected(userId:number) {
      // pega o usuario pelo id
      if(this.usersList[userId]){
        this.userIndex = userId;
        this.userSelected = structuredClone(this.usersList[userId]);
        console.log(this.userSelected);
      }
  }
}
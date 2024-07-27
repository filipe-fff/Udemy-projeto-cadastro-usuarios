import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserPlaceholder } from '../interfaces/user-placeholder/user-placeholder.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderListService {


  constructor(
    private readonly __http: HttpClient,
  ) { }

  getUsersPlaceholderList():Observable<IUserPlaceholder[]> {
    return this.__http.get<IUserPlaceholder[]>('https://jsonplaceholder.typicode.com/users');
  }
}
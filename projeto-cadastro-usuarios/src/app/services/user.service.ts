import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IPerson } from "../interfaces/IUser";
import { Users } from "../utils/Users";

@Injectable({
    providedIn: 'root',
})
export class UserService {


    
    getUser():Observable<IPerson[]> {
        return of<IPerson[]>(Users);
    }
}
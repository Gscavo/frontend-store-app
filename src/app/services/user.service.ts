import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.API_URL + environment.USERS_ROUTE;

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.url+'/');
  }

  public getUserByUsername(username: String): Observable<any> {
    return this.httpClient.get<UserModel>(this.url+`/username/${username}`);
  }

  public getUserByEmail(email: String): Observable<any> {
    return this.httpClient.get<UserModel>(this.url+`/email/${email}`);
  }

  public saveUser(user: UserModel): void {
    this.httpClient.post(this.url+'/', user);
  }
}

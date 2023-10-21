import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ItemModel } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = environment.API_URL+environment.ITEMS_ROUTE;

  constructor(private httpClient: HttpClient) { }

  public getItems(): Observable<any> {
    return this.httpClient.get<any>(this.url+'/');
  }

  public getItemByEmail(email: String): Observable<any> {
    return this.httpClient.get<any>(this.url + `/name/${email}`)
  }

  public saveItem(item: ItemModel): void {
    this.httpClient.post<ItemModel>(this.url+'/', item);
  }
}

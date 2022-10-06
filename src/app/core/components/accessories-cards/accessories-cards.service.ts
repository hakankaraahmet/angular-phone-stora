import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Accessories } from './accessories.model';

@Injectable({
  providedIn: 'root',
})
export class AccessoriesCardsService {
  constructor(private http: HttpClient) {}
  getAccessories(): Observable<Accessories[]> {
    return this.http
      .get<Accessories[]>(
        'https://accessories-list-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((data) => {
          const accessories: Accessories[] = [];
          for (let key in data) {
            accessories.push({ ...data[key], id: key });
          }
          return accessories;
        })
      );
  }

  addAccessory(accessory: Accessories): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      'https://accessories-list-default-rtdb.firebaseio.com/posts.json',
      accessory
    );
  }

  deleteAccessory(id: string) {
    return this.http.delete<{ name: string }>(
      `https://accessories-list-default-rtdb.firebaseio.com/posts/${id}.json`
    );
  }

  updateAccessory(accessory: Accessories) {
    const accessoryData = {
      [accessory.id]: {
        name: accessory.name,
        price: accessory.price,
        sku: accessory.sku,
      },
    };
    return this.http.patch(
      'https://accessories-list-default-rtdb.firebaseio.com/posts.json',
      accessoryData
    );
  }
}

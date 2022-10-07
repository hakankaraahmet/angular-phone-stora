import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iphone } from '../models/iphone.model';

@Injectable({
  providedIn: 'root',
})
export class IphoneCardsService {
  constructor(private http: HttpClient) {}
  getIphones(): Observable<Iphone[]> {
    return this.http
      .get<Iphone[]>(
        'https://iphone-list-53d00-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((data) => {
          const iphones: Iphone[] = [];
          for (let key in data) {
            iphones.push({ ...data[key], id: key });
          }
          return iphones;
        })
      );
  }

  addIphone(iphone: Iphone): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      'https://iphone-list-53d00-default-rtdb.firebaseio.com/posts.json',
      iphone
    );
  }

  deleteIphone(id: string) {
    return this.http.delete<{ name: string }>(
      `https://iphone-list-53d00-default-rtdb.firebaseio.com/posts/${id}.json`
    );
  }

  updateIphone(iphone: Iphone) {
    const iphoneData = {
      [iphone.id]: {
        name: iphone.name,
        price: iphone.price,
        mainImage: iphone.mainImage,
        color: iphone.color,
        screenSize: iphone.screenSize,
        description: iphone.description,
        sku: iphone.sku,
        model: iphone.model,
      },
    };
    return this.http.patch(
      'https://iphone-list-53d00-default-rtdb.firebaseio.com/posts.json',
      iphoneData
    );
  }
}

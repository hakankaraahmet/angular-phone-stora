import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Offer } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}
  getOffers(): Observable<Offer[]> {
    return this.http
      .get<Offer[]>(
        'https://offers-list-default-rtdb.firebaseio.com/posts.json'

      )
      .pipe(
        map((data) => {
          const offersList: Offer[] = [];
          for (let key in data) {
            offersList.push({ ...data[key], id: key });
          }
          return offersList;
        })
      );
  }

  addOffer(offer: Offer): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      'https://offers-list-default-rtdb.firebaseio.com/posts.json',
      offer
    );
  }

  deleteOffer(id: string) {
    return this.http.delete<{ name: string }>(
      `https://offers-list-default-rtdb.firebaseio.com/posts/${id}.json`
    );
  }

  updateOffer(offer: Offer) {
    const offerData = {
      [offer.id]: {
        name:offer.name,
        price:offer.price,
        offeredDevice: offer.offeredDevice

      },
    };
    return this.http.patch(
      'https://offers-list-default-rtdb.firebaseio.com/posts.json',
      offerData
    );
  }
}

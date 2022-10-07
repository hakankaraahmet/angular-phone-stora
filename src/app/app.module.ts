import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IphoneCardsComponent } from './core/components/iphone-cards/iphone-cards.component';
import { AccessoriesCardsComponent } from './core/components/accessories-cards/accessories-cards.component';
import { OffersComponent } from './core/components/offers/offers.component';
import * as fromApp from './core/store/app.reducer';
import { CreateIphoneComponent } from './core/components/iphone-cards/create-iphone/create-iphone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IphoneCardsEffects } from './core/components/iphone-cards/store/iphone-cards.effects';
import { EditIphoneComponent } from './core/components/iphone-cards/edit-iphone/edit-iphone.component';
import { EditAccessoriesComponent } from './core/components/accessories-cards/edit-accessories/edit-accessories.component';
import { CreateAccessoriesComponent } from './core/components/accessories-cards/create-accessories/create-accessories.component';
import { AccessoriesCardsEffects } from './core/components/accessories-cards/store/accessories-cards.effects';
import { CreateOfferComponent } from './core/components/offers/create-offer/create-offer.component';
import { EditOfferComponent } from './core/components/offers/edit-offer/edit-offer.component';
import { OffersEffects } from './core/components/offers/store/offers.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from './core/services/firebase.service';
@NgModule({
  declarations: [
    AppComponent,
    IphoneCardsComponent,
    AccessoriesCardsComponent,
    OffersComponent,
    CreateIphoneComponent,
    EditIphoneComponent,
    EditAccessoriesComponent,
    CreateAccessoriesComponent,
    CreateOfferComponent,
    EditOfferComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCfGY1H4e4WIV6YsX8mRH-ifiKJ8JNPyLc",
      authDomain: "angular-auth-d58cd.firebaseapp.com",
      projectId: "angular-auth-d58cd",
      storageBucket: "angular-auth-d58cd.appspot.com",
      messagingSenderId: "239031058849",
      appId: "1:239031058849:web:1fd9dc7896b6103dd10be0",
      measurementId: "G-978Q3YYBRR"
    }),
    EffectsModule.forFeature([
      IphoneCardsEffects,
      AccessoriesCardsEffects,
      OffersEffects,
    ]),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(fromApp.appReducer),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [FirebaseService,AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}

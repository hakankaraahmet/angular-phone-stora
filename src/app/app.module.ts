import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IphoneCardsComponent } from './iphone-cards/iphone-cards.component';
import { AccessoriesCardsComponent } from './accessories-cards/accessories-cards.component';
import { OffersComponent } from './offers/offers.component';
import * as fromApp from './store/app.reducer';
import { CreateIphoneComponent } from './iphone-cards/create-iphone/create-iphone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IphoneCardsEffects } from './iphone-cards/iphone-cards.effects';
import { EditIphoneComponent } from './iphone-cards/edit-iphone/edit-iphone.component';
import { EditAccessoriesComponent } from './accessories-cards/edit-accessories/edit-accessories.component';
import { CreateAccessoriesComponent } from './accessories-cards/create-accessories/create-accessories.component';
import { AccessoriesCardsEffects } from './accessories-cards/accessories-cards.effects';
import { CreateOfferComponent } from './offers/create-offer/create-offer.component';
import { EditOfferComponent } from './offers/edit-offer/edit-offer.component';
import { OffersEffects } from './offers/offers.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { HttpClientModule} from "@angular/common/http"
import { IphoneCardsEffects } from './iphone-cards/iphone-cards.effects';
import { EditIphoneComponent } from './iphone-cards/edit-iphone/edit-iphone.component';

@NgModule({
  declarations: [
    AppComponent,
    IphoneCardsComponent,
    AccessoriesCardsComponent,
    OffersComponent,
    CreateIphoneComponent,
    EditIphoneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([IphoneCardsEffects]),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

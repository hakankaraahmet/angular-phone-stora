import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesCardsComponent } from './accessories-cards/accessories-cards.component';
import { CreateAccessoriesComponent } from './accessories-cards/create-accessories/create-accessories.component';
import { EditAccessoriesComponent } from './accessories-cards/edit-accessories/edit-accessories.component';
import { HomeComponent } from './home/home.component';
import { CreateIphoneComponent } from './iphone-cards/create-iphone/create-iphone.component';
import { EditIphoneComponent } from './iphone-cards/edit-iphone/edit-iphone.component';
import { IphoneCardsComponent } from './iphone-cards/iphone-cards.component';
import { CreateOfferComponent } from './offers/create-offer/create-offer.component';
import { EditOfferComponent } from './offers/edit-offer/edit-offer.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'edit-offer/:id', component: EditOfferComponent },
  { path: 'iphone-cards', component: IphoneCardsComponent },
  { path: 'accessories-cards', component: AccessoriesCardsComponent },
  { path: 'create-accessories', component: CreateAccessoriesComponent },
  { path: 'edit-accessories/:id', component: EditAccessoriesComponent },
  { path: 'create-iphone', component: CreateIphoneComponent },
  { path: 'edit-iphone/:id', component: EditIphoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

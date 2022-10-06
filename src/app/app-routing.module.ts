import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesCardsComponent } from './core/components/accessories-cards/accessories-cards.component';
import { CreateAccessoriesComponent } from './core/components/accessories-cards/create-accessories/create-accessories.component';
import { EditAccessoriesComponent } from './core/components/accessories-cards/edit-accessories/edit-accessories.component';
import { CreateIphoneComponent } from './core/components/iphone-cards/create-iphone/create-iphone.component';
import { EditIphoneComponent } from './core/components/iphone-cards/edit-iphone/edit-iphone.component';
import { IphoneCardsComponent } from './core/components/iphone-cards/iphone-cards.component';
import { CreateOfferComponent } from './core/components/offers/create-offer/create-offer.component';
import { EditOfferComponent } from './core/components/offers/edit-offer/edit-offer.component';
import { OffersComponent } from './core/components/offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
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

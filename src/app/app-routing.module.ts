import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesCardsComponent } from './accessories-cards/accessories-cards.component';
import { CreateAccessoriesComponent } from './accessories-cards/create-accessories/create-accessories.component';
import { EditAccessoriesComponent } from './accessories-cards/edit-accessories/edit-accessories.component';
import { CreateIphoneComponent } from './iphone-cards/create-iphone/create-iphone.component';
import { EditIphoneComponent } from './iphone-cards/edit-iphone/edit-iphone.component';
import { IphoneCardsComponent } from './iphone-cards/iphone-cards.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: OffersComponent },
  { path: 'iphone-cards', component: IphoneCardsComponent },
  { path: 'accessories-cards', component: AccessoriesCardsComponent },
  { path: 'create-accessories', component: CreateAccessoriesComponent },
  { path: 'edit-accessories', component: EditAccessoriesComponent },
  { path: 'create-iphone', component: CreateIphoneComponent },
  { path: 'edit-iphone/:id', component: EditIphoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

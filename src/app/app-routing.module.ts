import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesCardsComponent } from './accessories-cards/accessories-cards.component';
import { IphoneCardsComponent } from './iphone-cards/iphone-cards.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: OffersComponent },
  { path: 'iphone-cards', component: IphoneCardsComponent },
  { path: 'accessories-cards', component: AccessoriesCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

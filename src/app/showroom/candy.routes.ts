import { Routes, RouterModule } from "@angular/router";
import { ShowroomCandyCardsComponent } from './showroom-candy-cards.component';
import { CandyProductPageComponent } from './candy-product-page.component';

export const CANDY_ROUTES: Routes = [
    { path: '', component: ShowroomCandyCardsComponent},
    { path: 'candy:name', component: CandyProductPageComponent }
];

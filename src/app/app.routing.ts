import { Routes, RouterModule } from "@angular/router";
import { ShowroomComponent } from "./showroom/showroom.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CANDY_ROUTES } from "./showroom/candy.routes";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/showroom', pathMatch: 'full' },
    { path: 'showroom', component: ShowroomComponent },
    { path: 'checkout', component: CheckoutComponent, children: CANDY_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

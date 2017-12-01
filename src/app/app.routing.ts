import { Routes, RouterModule } from "@angular/router";
import { ShowroomComponent } from "./showroom/showroom.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CANDY_ROUTES } from "./showroom/candy.routes";
import { CHECKOUT_ROUTES } from "./checkout/checkout.routes";
import { CompleteOrderComponent } from "./checkout/complete-order.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/showroom', pathMatch: 'full' },
    { path: 'showroom', component: ShowroomComponent, children: CANDY_ROUTES },
    { path: 'checkout', component: CheckoutComponent, children: CHECKOUT_ROUTES },
    { path: 'complete', component: CompleteOrderComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

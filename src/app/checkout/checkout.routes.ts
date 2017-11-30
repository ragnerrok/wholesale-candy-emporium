import { Routes, RouterModule } from "@angular/router";
import { PaymentComponent } from "./payment.component";
import { ShippingComponent } from "./shipping.component";
import { PreviewOrderComponent } from "./preview-order.component";


export const CHECKOUT_ROUTES: Routes = [
    { path: '', redirectTo: 'payment', pathMatch: 'full' },
    { path: 'payment', component: PaymentComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'preview', component: PreviewOrderComponent }
];

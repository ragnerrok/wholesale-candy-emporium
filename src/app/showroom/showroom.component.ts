import { Component } from "@angular/core";

@Component({
  selector: 'app-showroom',
  template: `
  <div class="row spacing">
    <router-outlet></router-outlet>
    <app-cart class="col-3 col-xs-0 col-md-5 col-lg-3 collapse d-md-flex pt-2 h-100" id="sidebar"></app-cart>
  </div>
  `,
})
export class ShowroomComponent {

}

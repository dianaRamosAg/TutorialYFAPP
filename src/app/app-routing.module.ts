import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutListComponent} from './produt-list/produt-list.component' 
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component' ;
import { ShippingComponent } from './shipping/shipping.component'; 


const routes: Routes = [
 { path:'',component:ProdutListComponent},
 { path:'products/:productId',component:ProductDetailsComponent},
 { path: 'cart', component: CartComponent },
 { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

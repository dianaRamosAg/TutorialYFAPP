import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { CartService } from "../cart.service"
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public product;
public products;


  constructor(private route:ActivatedRoute,
              private cartService: CartService ,
              private prodService: ProductsService) {
    this.products=prodService.products;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.product =this.products[+params.get('productId')];
      }
    );
    
  }//ngOnInit

  addToCart(product){
    this.cartService.addToCart(product);
    alert("Se añadió al carrito"+JSON.stringify(this.cartService.getItems()));
  }

}

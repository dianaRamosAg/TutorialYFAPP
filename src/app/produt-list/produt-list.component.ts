import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-produt-list',
  templateUrl: './produt-list.component.html',
  styleUrls: ['./produt-list.component.css']
})
export class ProdutListComponent implements OnInit {
public products;

  constructor(private productsService:ProductsService) { 
    this.products=productsService.products;
  }

ngOnInit() {
  }
share(){
  alert("El producto se compartió!");
}

onNotify()
{
  alert("Notificación en producto");
}


}

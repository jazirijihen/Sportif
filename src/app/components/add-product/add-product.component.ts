import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
  product :Product=new Product();
  
  constructor( private router:Router,private productService:ProductsService) { }

  ngOnInit(): void {
  }
  saveProduct(){
    this.productService.createProduct(this.product).subscribe(data=>{console.log(data);
    this.goToProductList();
    },
    error=>console.log(error))
  }
  goToProductList(){
    this.router.navigate(['/admin']);
  }
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
    
  }


}

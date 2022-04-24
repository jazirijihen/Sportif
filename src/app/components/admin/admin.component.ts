import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public term : string
  public products : Product[]
  constructor( public router : Router, route : ActivatedRoute, private productsService : ProductsService) { 
    this.term = route.snapshot.paramMap.get('term') || ""}


  ngOnInit(): void {
    
    this.getProductList();
    this.productsService.getProducts().subscribe((products : Product[]) => {
      this.products = products

      for (let product of this.products) {
          product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
          "../../../assets/static/images/product-placeholder.png";
          
      }
  }, (error: ErrorEvent) => {
  })
  }
  
private getProductList(){
  this.productsService.getProducts().subscribe((products : Product[]) => {
    this.products = products

    for (let product of this.products) {
        product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
        "../../../assets/static/images/product-placeholder.png";
        
    }
}, (error: ErrorEvent) => {
})

}
logOut () {
  localStorage.removeItem('token')
  this.router.navigateByUrl('/login').then(() => window.location.reload())
}
add(){this.router.navigate(['/add-product']);}
edit(id:number){this.router.navigate(['/update-product', id]);}
delete(id: number){
  this.productsService.deleteProduct(id).subscribe( data => {
    console.log(data); 
    this.getProductList(); 
  })
  
}

}

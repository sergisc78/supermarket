import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CleaningService } from 'src/app/service/cleaning.service';
import { product } from 'src/model/product';

@Component({
  selector: 'app-cleaning-products',
  templateUrl: './cleaning-products.component.html',
  styleUrls: ['./cleaning-products.component.css']
})
export class CleaningProductsComponent implements OnInit {

  listProducts: product[] = [];

  constructor(private _cleaningService: CleaningService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._cleaningService.getProducts().subscribe(data => {
      this.listProducts = data;
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(id: any): void {
    this._cleaningService.deleteProduct(id).subscribe(data => {
      this.toastr.error("Product deleted successfully", "Delete product",{
        positionClass: 'toast-top-right', timeOut: 6000
      })
      this.getProducts();
    }, error => {
      console.log(error);

    });
  }

}

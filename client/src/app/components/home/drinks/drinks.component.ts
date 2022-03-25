import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DrinksService } from 'src/app/service/drinks.service';
import { product } from 'src/model/product';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  

  listProducts: product[] = [];

  
  constructor(private _drinksService: DrinksService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._drinksService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(id: any): void {
    this._drinksService.deleteProduct(id).subscribe(data => {
      this.toastr.error("Product deleted successfully", "Delete product",{
        positionClass: 'toast-top-right', timeOut: 6000
      })
      this.getProducts();
    }, error => {
      console.log(error);

    });
  }

}

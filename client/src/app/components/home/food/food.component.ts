import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/service/food.service';
import { product } from 'src/model/product';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {


  listProducts: product[] = [];

  constructor(private _foodService: FoodService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._foodService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(id: any): void {
    this._foodService.deleteProduct(id).subscribe(data => {
      this.toastr.error("Product deleted successfully", "Delete product",{
        positionClass: 'toast-top-right', timeOut: 6000
      })
      this.getProducts();
    }, error => {
      console.log(error);

    });
  }
}

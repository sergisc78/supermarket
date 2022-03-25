import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FoodService } from 'src/app/service/food.service';
import { product } from 'src/model/product';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  productForm: FormGroup;
  title = "Add product";
  id: string | null;


  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _foodService: FoodService,
    private aroute: ActivatedRoute,
    private router: Router) {

    this.productForm = this.fb.group({
      productName: ["", Validators.required],
      type: ["", Validators.required],
      stock: ["", Validators.required],
      price: ["", Validators.required]
    })

    this.id = this.aroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editProduct();
  }

  addUpdateProduct() {

    const PRODUCT: product = {
      productName: this.productForm.get('productName')?.value,
      type: this.productForm.get('type')?.value,
      stock: this.productForm.get('stock')?.value,
      price: this.productForm.get('price')?.value

    }

    // IF ID IS NOT NULL, THE PRODUCT EXIST, THEN WE UPDATE IT
    if (this.id !== null) {
      this._foodService.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.success('Product updated successfully', 'Update product', {
          positionClass: 'toast-top-right', timeOut: 6000
        });
        this.router.navigate(['/food']);
      }, error => {
        console.log(error);

      });


    } else {//ADD PRODUCT
      this._foodService.saveProduct(PRODUCT).subscribe(data => {
        this.toastr.success('Product saved succesfully', 'Save product', {
          positionClass: 'toast-top-right', timeOut: 6000
        });
        this.router.navigate(['/food']);
      }, error => {
        console.log(error);
        this.productForm.reset();

      });

    }
  }


  // SHOW DATA IN INPUTS
  editProduct() {
    if (this.id !== null) {
      this.title = "Edit product";
      this._foodService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          productName: data.productName,
          type: data.type,
          stock: data.stock,
          price: data.price
        });
      });
    }
  }
}

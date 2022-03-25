import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DrinksService } from 'src/app/service/drinks.service';
import { product } from 'src/model/product';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {


  productForm: FormGroup;
  title = "Add product";
  id: string | null;
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _drinksService: DrinksService,
    private arouter: ActivatedRoute) {

    this.productForm = this.fb.group({
      productName: ["", Validators.required],
      type: ["", Validators.required],
      stock: ["", Validators.required],
      price: ["", Validators.required]
    });

    this.id = this.arouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.edit();
  }


  addUpdateProduct(): void {
    const PRODUCT: product = {
      productName: this.productForm.get('productName')?.value,
      type: this.productForm.get('type')?.value,
      stock: this.productForm.get('stock')?.value,
      price: this.productForm.get('price')?.value

    }

    console.log(this.productForm);
    
    

    // IF ID IS NOT NULL, THE PRODUCT EXIST, THEN WE UPDATE IT
    if (this.id !== null) {

      this._drinksService.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.success('Product updated successfully', 'Update a product', {
          positionClass: 'toast-top-right', timeOut: 6000
        });
        this.router.navigate(['/drinks']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      });
    } else { //ADD PRODUCT
      console.log(PRODUCT);

      this._drinksService.saveProduct(PRODUCT).subscribe(data => {
        this.toastr.success('Product saved succesfully', 'Save product', {
          positionClass: 'toast-top-right', timeOut: 6000
        });

        this.router.navigate(['/drinks']);
      }, error => {
        console.log(error);
        this.productForm.reset();

      });

    }

  }
  // SHOW DATA IN INPUTS
  edit() {
    if (this.id !== null) {
      this.title = "Edit product";
      this._drinksService.getProduct(this.id).subscribe(data => {
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

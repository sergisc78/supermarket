import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CleaningService } from 'src/app/service/cleaning.service';
import { product } from 'src/model/product';

@Component({
  selector: 'app-add-cleaning-product',
  templateUrl: './add-cleaning-product.component.html',
  styleUrls: ['./add-cleaning-product.component.css']
})
export class AddCleaningProductComponent implements OnInit {

  productForm: FormGroup;
  title = "Add product";
  id: string | null;

  constructor(private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private arouter:ActivatedRoute,
    private _cleaningProducts:CleaningService) { 

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

      this._cleaningProducts.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.success('Product updated successfully', 'Update product', {
          positionClass: 'toast-top-right', timeOut: 6000
        });
        this.router.navigate(['/cleaningProducts']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      });
    } else { //ADD PRODUCT
      console.log(PRODUCT);

      this._cleaningProducts.saveProduct(PRODUCT).subscribe(data => {
        this.toastr.success('Product saved succesfully', 'Save product', {
          positionClass: 'toast-top-right', timeOut: 6000
        });

        this.router.navigate(['/cleaningProducts']);
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
      this._cleaningProducts.getProduct(this.id).subscribe(data => {
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

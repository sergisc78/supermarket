import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';


//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrinksComponent } from './components/home/drinks/drinks.component';
import { FoodComponent } from './components/home/food/food.component';
import { CleaningProductsComponent } from './components/home/cleaning-products/cleaning-products.component';
import { AddCleaningProductComponent } from './components/home/add-cleaning-product/add-cleaning-product.component';
import { AddDrinkComponent } from './components/home/add-drink/add-drink.component';
import { AddFoodComponent } from './components/home/add-food/add-food.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DrinksComponent,
    FoodComponent,
    CleaningProductsComponent,
    AddCleaningProductComponent,
    AddDrinkComponent,
    AddFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,// required animations module
    ToastrModule.forRoot(),// ToastrModule added
    ReactiveFormsModule, // FORMS
    MatPaginatorModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCleaningProductComponent } from './components/home/add-cleaning-product/add-cleaning-product.component';
import { AddDrinkComponent } from './components/home/add-drink/add-drink.component';
import { AddFoodComponent } from './components/home/add-food/add-food.component';
import { CleaningProductsComponent } from './components/home/cleaning-products/cleaning-products.component';
import { DrinksComponent } from './components/home/drinks/drinks.component';
import { FoodComponent } from './components/home/food/food.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'drinks', component: DrinksComponent },
      { path: 'food', component: FoodComponent },
      { path: 'cleaningProducts', component: CleaningProductsComponent },
      { path: 'addCleaningProducts', component: AddCleaningProductComponent },
      { path: 'addDrink', component: AddDrinkComponent },
      { path: 'addFood', component: AddFoodComponent },
      { path: 'editProduct/:id', component: AddDrinkComponent },
      { path: 'editFoodProduct/:id', component: AddFoodComponent },
      { path: 'editCleaningProduct/:id', component: AddCleaningProductComponent },
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

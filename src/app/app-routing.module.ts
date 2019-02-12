import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
  { path: 'shopping-list', loadChildren: './pages/shopping-list/shopping-list.module#ShoppingListPageModule' },
  { path: 'add-shopping', loadChildren: './pages/add-shopping/add-shopping.module#AddShoppingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

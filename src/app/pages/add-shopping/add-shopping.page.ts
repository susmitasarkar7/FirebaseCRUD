import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/models/shopping-item/shopping-item.interface';

@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.page.html',
  styleUrls: ['./add-shopping.page.scss'],
})
export class AddShoppingPage implements OnInit {

  // Creating a new object
  shoppingItem = {} as ShoppingItem;

  constructor() { }

  ngOnInit() {
  }

  addShoppingItem(shoppingItem : ShoppingItem) {
    // Log the results out to the console
    console.log(shoppingItem);
  }

}

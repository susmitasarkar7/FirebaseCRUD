import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.page.html',
  styleUrls: ['./add-shopping.page.scss'],
})
export class AddShoppingPage implements OnInit {

  // Creating a new object
  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(private database: AngularFireDatabase, private navCtrl: NavController) { 
    this.shoppingItemRef$ = this.database.list('shopping-list');

    /*
      shopping-list:
        0:
          itemName: 'Pizza',
          itemNumber: 1
        1:
          itemName: 'Nun',
          itemNumber: 5
    */
  }

  ngOnInit() {
  }

  addShoppingItem(shoppingItem : ShoppingItem) {

    /* 
      Create a new anonymous object and convert itemNumber to a number.
      Push this to our Firebase data under 'shopping-list' node.
    */
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    // Log the results out to the console
    console.log(shoppingItem);

    // Reset our ShoppingItem
    this.shoppingItem = {} as ShoppingItem;

    // Navigate the user to the ShoppingList page
    this.navCtrl.pop();
  }

}

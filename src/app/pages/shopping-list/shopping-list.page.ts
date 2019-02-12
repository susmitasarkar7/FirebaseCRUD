import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { ShoppingItem } from 'src/app/models/shopping-item/shopping-item.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl:NavController, private datbase: AngularFireDatabase) {

    /*  
      Pointing shoppingListRef$ at Firebase -> 'shopping-list' nodeChildrenAsMap.
      That means not only can we push things from this reference to the database,
      but also we have access to everything inside of that node.  
    */
    this.shoppingListRef$ = this.datbase.list('shopping-list');
    
    // this.shoppingListRef$.subscribe(x => console.log(x));

   }

  ngOnInit() {
  }


  navigateToAddShopping() {
    // Navigate the user to AddShopping Page
    this.navCtrl.navigateForward('/add-shopping');
  }
}

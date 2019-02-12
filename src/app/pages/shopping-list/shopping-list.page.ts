import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }


  navigateToAddShopping() {
    // Navigate the user to AddShopping Page
    this.navCtrl.navigateForward('/add-shopping');
  }
}

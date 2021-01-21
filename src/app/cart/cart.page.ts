import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart_items :any =[];
  final_cart_items :any =[];
  final_cart_price :any =[];
    constructor(
      private authService: AuthenticationService,
      private navCtrl: NavController,
      private userDetails: UserDetailsService,
      private alertCtrl: AlertController,
      private helper: HelperProvider,
      private plt: Platform,
  
    ) { }
  
    ngOnInit() {
      let uId = this.authService.getUserId();
      this.userDetails.getCartData(uId).subscribe(
        data => {
            this.cart_items = data;
            this.final_cart_items=this.cart_items[0].cart_items;
            this.final_cart_price=this.cart_items[0].totalCost;
            console.log(data)
            this.helper.dismissLoader();
        },
        err => {
            console.log(err);
            this.helper.dismissLoader();
        }
    );

    var index = this.final_cart_items.findIndex(x=>x.counter === 0);
    this.final_cart_items.splice(index, 1);
    console.log(index)
  
  
  }
  
  }
  
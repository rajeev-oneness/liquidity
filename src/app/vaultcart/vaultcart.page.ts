import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-vaultcart',
  templateUrl: './vaultcart.page.html',
  styleUrls: ['./vaultcart.page.scss'],
})
export class VaultcartPage implements OnInit {
cart_items :any =[];
final_cart_items :any =[];
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
          console.log(this.cart_items[0].cart_items)
          this.helper.dismissLoader();
      },
      err => {
          console.log(err);
          this.helper.dismissLoader();
      }
  );
  }

}

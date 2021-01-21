import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

all_liquor_shop :any =[];

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
    localStorage.setItem("user_id",uId);
  	this.userDetails.getAllliquorshops().subscribe(
            (data) => {
                this.all_liquor_shop = data;
                console.log(this.all_liquor_shop)
                this.helper.dismissLoader();
            },
            (err) => {
                console.log(err);
            });
  }

  gotoshopproduct(liquorshopid){
    this.navCtrl.navigateForward('/vaultselected');
    localStorage.setItem("liquorshopid",liquorshopid);
  }




}

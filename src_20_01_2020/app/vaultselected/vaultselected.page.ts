import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-vaultselected',
  templateUrl: './vaultselected.page.html',
  styleUrls: ['./vaultselected.page.scss'],
})
export class VaultselectedPage implements OnInit {
  all_liquor :any =[];
  all_liquor_category :any =[];
  all_liquor_categorywise :any =[];
  liquorshopid='';
  liquor_quantity_unit :any =[];
  cartPrice :any =[];
  cartTotal_unit0 :any =[];
  cartTotal_unit25 :any =[];
  cartTotal_unit50 :any =[];
  liquorName :any =[];
  count_CartItem=0;
  final_cart_price =0;
  checkout :any =[];
  checkout_final :any =[];
  cart_items:any =[];
  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private userDetails: UserDetailsService,
    private alertCtrl: AlertController,
    private helper: HelperProvider,
    private plt: Platform,

  ) { }

  ngOnInit() {
    this.liquorshopid=localStorage.getItem("liquorshopid");
    console.log(">>>",this.liquorshopid);
  	this.userDetails.getLiquorData(this.liquorshopid).subscribe(
      data => {
          this.all_liquor = data;
          console.log(data)
          this.helper.dismissLoader();
      },
      err => {
          console.log(err);
          this.helper.dismissLoader();
      }
  );
  this.userDetails.getLiquorList().subscribe(
    data => {
        this.all_liquor_category = data;
        console.log(data)
        this.helper.dismissLoader();
    },
    err => {
        console.log(err);
        this.helper.dismissLoader();
    }
);

let uId = this.authService.getUserId();

this.userDetails.getCartData(uId).subscribe(
  data => {
      this.cart_items = data;
      console.log(data)
      this.helper.dismissLoader();
      console.log(">>>>>>>",this.cart_items.length)

  },
  err => {
      console.log(err);
      this.helper.dismissLoader();
  }
);

}

      liquorSegmentRegular(){
          this.userDetails.fetchDataByCollectionId('liquorPrice', this.liquorshopid,"Regular Scotch").subscribe(
            (data) => {
              this.helper.dismissLoader();
              this.all_liquor_categorywise = data;
              console.log('liquor data.................',this.all_liquor_categorywise);
            },
            (err) => {
              console.log(err);
              this.helper.dismissLoader();
            }
          );
        }

        liquorSegmentPremium(){
          this.userDetails.fetchDataByCollectionId('liquorPrice', this.liquorshopid,"Premium Scotch").subscribe(
            (data) => {
              this.helper.dismissLoader();
              this.all_liquor_categorywise = data;
              console.log('liquor Premium data.................',this.all_liquor_categorywise);
            },
            (err) => {
              console.log(err);
              this.helper.dismissLoader();
            }
          );
        }

        liquorSegmentWhisky(){
          this.userDetails.fetchDataByCollectionId('liquorPrice', this.liquorshopid,"Scotch Whisky").subscribe(
            (data) => {
              this.helper.dismissLoader();
              this.all_liquor_categorywise = data;
              console.log('liquor data.................',this.all_liquor_categorywise);
            },
            (err) => {
              console.log(err);
              this.helper.dismissLoader();
            }
          );
        }

        public optionsliquorShopOwner(value, index:number) { //here item is an object
          console.log("<<<<<<<<<<",value);
      }

      unit0(unit,price,liquorName){
        console.log(price);
        this.liquor_quantity_unit=unit;
        this.cartPrice=price;
        this.cartTotal_unit0=Number(unit)*Number(price);
        this.liquorName=liquorName;
        console.log("?????",this.cartTotal_unit0);
        this.addedToCart(this.liquorName,this.liquor_quantity_unit,this.cartTotal_unit0)
      }

      unit25(unit,price,liquorName){
        console.log(price);
        this.liquor_quantity_unit=unit;
        this.cartPrice=price;
        this.cartTotal_unit25=Number(unit)*Number(price);
        this.liquorName=liquorName;
        console.log(this.cartTotal_unit25);
        this.addedToCart(this.liquorName,this.liquor_quantity_unit,this.cartTotal_unit25)

      }

      unit50(unit,price,liquorName){
        console.log(price);
        this.liquor_quantity_unit=unit;
        this.cartPrice=price;
        this.cartTotal_unit50=Number(unit)*Number(price);
        this.liquorName=liquorName;
        console.log(this.cartTotal_unit50);
        this.addedToCart(this.liquorName,this.liquor_quantity_unit,this.cartTotal_unit50)

      }

      addedToCart(itemName,unit,cost){
        if (cost!=0) {
          this.count_CartItem=this.count_CartItem+1;
        }
        console.log(this.count_CartItem);
        this.final_cart_price=Number(this.cartTotal_unit50) +Number(this.cartTotal_unit25) +Number(this.cartTotal_unit0) ;
        console.log(this.final_cart_price);
        this.checkout.push({
          liquorName:itemName,
          liquorUnit:unit,
          liquorPrice:cost
          
      });
      this.checkout_final.push(...this.checkout);
      this.checkout=[];

      
        }

        checkout_btn(){
          let uId = this.authService.getUserId();
          localStorage.setItem("user_id",uId);
      this.userDetails.getCartData(uId).subscribe(
          data => {
              this.cart_items = data;
              console.log(data)
              console.log("arrLength>>",this.cart_items.length)
              this.helper.dismissLoader();
          },
          err => {
              console.log(err);
              this.helper.dismissLoader();
          }
      );
      if (this.cart_items.length==0) {
        this.authService.addCart(uId,this.checkout_final,this.final_cart_price); 
          this.checkout_final=[];
          this.navCtrl.navigateForward('/vaultcart');
      }else{
        this.userDetails.UpdateCartData('cartItem',this.cart_items[0].id,this.checkout_final,this.final_cart_price);
        this.navCtrl.navigateForward('/vaultcart');

      }
          
          
          
        }
}

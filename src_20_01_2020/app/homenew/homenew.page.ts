import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.page.html',
  styleUrls: ['./homenew.page.scss'],
})
export class HomenewPage implements OnInit {
all_liquor :any =[];
all_liquor_categorywise :any =[];
liquorshopid='';
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

  this.userDetails.fetchDataByCollectionId('liquorPrice', this.liquorshopid,"Rum").subscribe(
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

}

import { Component, OnInit, ChangeDetectorRef,ViewChildren,QueryList  } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController,
          Platform,
          ToastController,
          IonRouterOutlet,
          AlertController,
          ModalController
       } from '@ionic/angular';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { HelperProvider } from 'src/app/services/helper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
name='';
mail='';
mobile='';
password='';

  constructor(
  	public platform: Platform,
        private location: Location,
        private alertController: AlertController,
        public router: Router,
        private authService: AuthenticationService,
        private userDetails: UserDetailsService,
        public helper: HelperProvider,
        private navCtrl: NavController,
		private modalCtrl: ModalController,
  	) { }

  ngOnInit() {
  }

  submitValues(){
    if (this.mail=="") {
      this.helper.showErrorCustom("Please enter your mail")
    }else if (this.name=="") {
      this.helper.showErrorCustom("Please enter your name")
    }else if (this.mobile=="") {
      this.helper.showErrorCustom("Please enter your mobile")
    }else if (this.password=="") {
      this.helper.showErrorCustom("Please enter your password")
    }else{
          let regData = {
        "email":this.mail,
        "createPassword":this.password,
        "confirmPassword":this.password,
        "name":this.name,
        // "mail":this.mail,
        "mobile":this.mobile,
        

        
      };
    this.authService
              .emailSignUp(regData)
              .then(res => {
                  if (res.status === 0) {
                      this.helper.showError(res.error.code);
                  }
                  if (res.status === 1) {
                      this.helper.presentToast("Sucessfully Signup");
                      // this.authService.addUser(this.name,this.mail,this.mobile,this.dob,this.gender,this.address,this.image); 
                      this.mail='';
                      this.name='';
                      this.mobile='';
                      this.navCtrl.navigateForward('/login');
                  }
              })
              .catch(err => {
                  console.log('Signup err : ', err);
              });
      

    }


  }
  edi
}

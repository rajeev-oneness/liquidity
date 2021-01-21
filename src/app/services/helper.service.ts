// import { HTTP } from "@ionic-native/http";
import { Injectable } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
import { Location } from '@angular/common';
// import { Device } from "@ionic-native/device";
// import { InAppBrowser } from "@ionic-native/in-app-browser";
// import { PhotoViewer } from "@ionic-native/photo-viewer";
// import { SocialSharing } from "@ionic-native/social-sharing";
// import { EmailComposer } from "@ionic-native/email-composer";

// import * as Credentials from "../../app/credentials";
// import { BrowserTab } from "@ionic-native/browser-tab";

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {
    // GOOGLEAPI_KEY = "AIzaSyAHph77P7vcK6CZp2DA_yoQ7CTlzg1YEOU";  // => vinay@capitalnumbers.com
    // GOOGLEAPI_KEY = "AIzaSyALx5gzgZ8e-eYm5cHsl5d81PH6926r2co"; // => SageScheduler
    loading: any;

    constructor(
        // public http: HTTP,
        public toastCtrl: ToastController,
        public loadingController: LoadingController,
        public location: Location
    ) {
        console.log('Hello HelperProvider Provider');
    }

    showError(code) {
        console.log('code', code);
        let msg = 'Something went wrong';
        if (code === 'auth/user-not-found') {
            msg = 'User not found';
        } else if (code === 'auth/wrong-password') {
            msg = 'Incorrect Password';
        } else if (code === 'auth/invalid-email') {
            msg = 'Invalid email';
        } else if (code === 'auth/network-request-failed') {
            msg = 'No internet connection';
        } else if (code === 'storage/retry-limit-exceeded') {
            msg = 'No internet connection';
        } else if (code === 'auth/email-already-in-use') {
            msg = 'Email already registered';
        }
        this.presentToast(msg);
    }

    showErrorCustom(code) {
        console.log('code', code);
        let msg = 'Something went wrong';
        this.presentToast(code);
    }

    async presentToast(msg) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }



    async presentLoading() {
        this.loading = await this.loadingController.create({
            message: 'Loading...',
        });
        await this.loading.present();
    }

    async dismissLoader() {
        if (this.loading) {
            await this.loading.dismiss();
        }

    }

    sendBack() {
        this.location.back();
    }

}


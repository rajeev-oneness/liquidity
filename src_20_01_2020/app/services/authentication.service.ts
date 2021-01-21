import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  authState: any = null;
  id=0;
  constructor(
    private plt: Platform,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private loadingController: LoadingController

  ) {
    this.plt.ready().then(() => {
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth;
        console.log('Authservice AuthState : ', this.authState.email);
        localStorage.setItem("mail",this.authState.email);
        this.authenticationState.next(auth !== null);

      });
    });
  }


  isAuthenticated() {
    return this.authenticationState.value;
  }

  get currentAuthState(): any {
    return this.afAuth.authState;
  }

  /**
   * @function{{signUpWithEmail}}
   * @description{{Sign up with email password}}
   */
  async emailSignUp(body): Promise<any> {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();

    return new Promise((resolve, reject) => {
      this.afAuth
        .createUserWithEmailAndPassword(body.email, body.createPassword)
        .then(res => {
          loading.dismiss();
          this.authState = res.user;
          this.id=new Date().getTime();
          this.afs.doc(`/userProfile/${this.id}`).set({
            email: body.email,
            id: this.authState.uid,
            createdAt: +new Date(),
             name: body.name,
            mobile: body.mobile,
            // dob:body.dob,
            // gender:body.gender,
            // address:body.address,
            // image:body.image
          }, { merge: true });
          resolve({ status: 1, user: this.authState });
        })
        .catch(error => {
          // return { status: 0, error: error };
          loading.dismiss();
          resolve({ status: 0, error: error });
        });
    });
  }

  /**
   * @function{{loginWithEmail}}
   * @description{{Login with email password}}
   */
  async loginWithEmail(email: string, password: string) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();

    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        loading.dismiss();
        this.authState = res.user;
        return { status: 1, user: res.user };
      })
      .catch(error => {
        loading.dismiss();
        return { status: 0, error: error };
      });
  }


  getUserId() {
    if (this.authState) {
      console.log("userId",this.authState.uid)
      return this.authState.uid;
    }
    else {
      return null;
    }
  }

  getUserById(id) {
    return this.afs.collection(`userProfile`).doc(id).valueChanges()
  }

  // =======================================
  // Sends email allowing user to reset password
  resetPassword(email: string): Promise<any> {
    return this.afAuth
      .sendPasswordResetEmail(email)
      .then(res => {
        return { status: 1, res };
      })
      .catch(error => {
        return { status: 0, error: error };
      });
  }

  // =======================================
  // Sign Out
  signOut(): Promise<any> {
    return this.afAuth.signOut();
  }

// =======================================
  // Add Profile Image
  addProfileImage(url){
    let id =   this.getUserId()
    console.log("id ", id)
    return this.afs.doc(`/userProfile/${id}`).update({profileImage: url})
          .then(res => {
            return {status : 1, data : res}
          })
          .catch(err => {
            return {status: 0, error:err}
          })
  }


  // googleAuth(token) {
  //   let gplusCredential = firebase.auth.GoogleAuthProvider.credential(token);
  //   return this.afAuth.signInAndRetrieveDataWithCredential(gplusCredential);
  // }

  // facebookAuth(token) {
  //   let facebookCredential = firebase.auth.FacebookAuthProvider.credential(token);
  //   return firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential);
  // }

  // =======================================
  // Add Vision Image
  // addVisionImage(url){
  //   let id =   this.getUserId()
  //   console.log("id ", id)
  //   return this.afs.doc(`/userProfile/${id}`).update({profileImage: url})
  //         .then(res => {
  //           return {status : 1, data : res}
  //         })
  //         .catch(err => {
  //           return {status: 0, error:err}
  //         })
  // }

  //   addUser(user: any) {
  //   //console.log('service',user);
  //   return this.afs.collection('userProfile').doc(`${user.id}`).set(user)
  // }


  addUser(name,mail,mobile,dob,gender,address,image) {
    this.id=new Date().getTime();
    this.afs.doc(`/userProfile/${this.id}`).set({
            name: name,
            mail: mail,
            mobile: mobile,
            dob:dob,
            gender:gender,
            address:address,
            id: this.id,
            image:image
            // prompts: [],
            // visions: []
          }, { merge: true });
  }

  AddLiquorShops(liquorShopOwner,liquorShopName,liquorLocation,liquorName,liquorPrice,liquorSize,liquorLocationLatitude,liquorLocationLongitude,liquorShopOwnerEmail,phone,website,fb_link,twitter_link,youtube_link) {
    this.id=new Date().getTime();
    this.afs.doc(`/liquorshops/${this.id}`).set({
            liquorShopOwner:liquorShopOwner,
            liquorShopName: liquorShopName,
            liquorLocation: liquorLocation,
            liquorName:liquorName,
            liquorPrice:liquorPrice,
            liquorSize:liquorSize,
            id: this.id,
            liquorLocationLatitude:liquorLocationLatitude,
            liquorLocationLongitude:liquorLocationLongitude,
            liquorShopOwnerEmail:liquorShopOwnerEmail,
            phone:phone,
            website:website,
            fb_link:fb_link,
            twitter_link:twitter_link,
            youtube_link:youtube_link,
          }, { merge: true });
  }

  AddLiquorWithPrice(liquorShopId,liquorShopOwner,image,liquorCategory,liquorName,SmallLiquorMinPrice,SmallLiquorMaxPrice,SmallLiquorNormalPrice,BigLiquorMinPrice,BigLiquorMaxPrice,BigLiquorNormalPrice) {
    this.id=new Date().getTime();
    this.afs.doc(`/liquorPrice/${this.id}`).set({
            
            id: this.id,
            liquorShopId:liquorShopId,
            image:image,
            liquorShopOwner:liquorShopOwner,
           liquorName:liquorCategory,
        liquorCategory:liquorName,
        SmallLiquorMinPrice:SmallLiquorMinPrice,
        SmallLiquorMaxPrice:SmallLiquorMaxPrice,
        SmallLiquorNormalPrice:SmallLiquorNormalPrice,
        BigLiquorMinPrice:BigLiquorMinPrice,
        BigLiquorMaxPrice:BigLiquorMaxPrice,
        BigLiquorNormalPrice:BigLiquorNormalPrice,
          }, { merge: true });
  }

  addOrder(name,mail,price,order_date,orderid,shop_name) {
    this.id=new Date().getTime();
    this.afs.doc(`/orderHistory/${this.id}`).set({
           name: name,
           mail: mail,
           price: price,
           order_date:order_date,
           orderid:orderid,
           shop_name:shop_name,
           id: this.id,
          }, { merge: true });
  }

 AddEnquiryList(mail,name,mobile,message) {
    this.id=new Date().getTime();
    this.afs.doc(`/enquiryList/${this.id}`).set({
            mail: mail,
            id: this.id,
            name:name,
            mobile:mobile,
            message:message,
          }, { merge: true });
  }

  addLiquor(liquorName,image) {
    this.id=new Date().getTime();
    this.afs.doc(`/liquorName/${this.id}`).set({
            liquorName: liquorName,
            id: this.id,
            liquorImage:image,
            // prompts: [],
            // visions: []
          }, { merge: true });
  }

  addCart(user_id,final_cart,total_value) {
    this.id=new Date().getTime();
    this.afs.doc(`/cartItem/${this.id}`).set({
           user_id: user_id,
           id: this.id,
           cart_items:final_cart,
           totalCost:total_value
          }, { merge: true });
  }
}

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(
  	private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private authService: AuthenticationService
  	) { }


  uploadProfileImages(image, myId) {
        const date = new Date();
        return new Promise((resolve, reject) => {
            if (image) {
                const file = image;
                const filePath = `profile_img/img-${myId}`;
                const ref = this.storage.ref(filePath);

                const task = ref
                    .putString(file, 'data_url')
                    .then(() => {
                        ref.getDownloadURL().subscribe(
                            url => {
                                console.log('url : ', url);
                                resolve({ status: true, url });
                            },
                            err => {
                                console.log(err);
                                reject({ status: false, err });
                            }
                        );
                    })
                    .catch(err => {
                        reject({ status: false, err });
                    });
            }
        });
    }

    addUserData(collection, userId, user_name, user_age, user_city, user_country, dream_job, about_me) {
        return this.afs
            .collection(`/${collection}`)
            .doc(userId)
            .update({
                name: user_name,
                age:user_age,
                user_city:user_city,
                user_country:user_country,
                dream_job:dream_job,
                about_me:about_me
            });
    }

    getUser() {
        return this.afs.collection('/userProfile').valueChanges();
    }

    getLiquorShops() {
        return this.afs.collection('/liquorshops').valueChanges();
    }

    getOrderList() {
        return this.afs.collection('/orderHistory').valueChanges();
    }

    getLiquorList() {
        return this.afs.collection('/liquorName').valueChanges();
    }
    getLiquorListWithPrice() {
        return this.afs.collection('/liquorPrice').valueChanges();
    }
    fetchShop(collection, shop_id) {
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('id', '==', shop_id)
            )
            .valueChanges();
    }

    // getPrompts() {
    //         return this.afs.collection('/Prompts',ref => ref.where('id', '==', '2'))
    //         .valueChanges();
    //     }

    promptsAnswer(collection, userId, promptArr) {
        return this.afs
            .collection(`/${collection}`)
            .doc(userId)
            .update({
                prompts: promptArr
            });
    }

    fetchPromptAnswerItem(collection, user_id) {
        return this.afs
            .collection(`/${collection}`, ref =>
                ref.where('id', '==', user_id)
            )
            .valueChanges();
    }

    getVisions() {
        return this.afs.collection('/visions').valueChanges();
    }

    uploadVisionImages(image, myId,visionId) {
        const date = new Date();
        return new Promise((resolve, reject) => {
            if (image) {
                const file = image;
                const filePath = `vision_img/img-${myId}-${visionId}`;
                const ref = this.storage.ref(filePath);

                const task = ref
                    .putString(file, 'data_url')
                    .then(() => {
                        ref.getDownloadURL().subscribe(
                            url => {
                                console.log('url : ', url);
                                resolve({ status: true, url });
                            },
                            err => {
                                console.log(err);
                                reject({ status: false, err });
                            }
                        );
                    })
                    .catch(err => {
                        reject({ status: false, err });
                    });
            }
        });
    }

    visionsAnswer(collection, userId, visionArr) {
        return this.afs
            .collection(`/${collection}`)
            .doc(userId)
            .update({
                visions: visionArr
            });
    }

    getPrograms() {
        return this.afs.collection('/programs').valueChanges();
    }
    getYourself_date() {
        return this.afs.collection('/dates').valueChanges();
    }
    UpdateUserData(collection, itemid,name,mail,mobile,dob,gender,address) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                 id: itemid,
                 name: name,
                 mail: mail,
                 mobile: mobile,
                 dob:dob,
                gender:gender,
                address:address,


            });
    }
    deleteUserData(pid) {
        return this.afs
            .collection('/userProfile')
            .doc(pid.toString())
            .delete();
    }

    UpdateLiquorShopData(collection, itemid,liquorShopOwner,liquorShopName,liquorLocation,liquorName,liquorSize,liquorPrice,liquorLocationLatitude,liquorLocationLongitude,liquorShopOwnerEmail,phone,website,fb_link,twitter_link,youtube_link) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                liquorShopOwner:liquorShopOwner,
                 liquorLocation: liquorLocation,
                 liquorShopName: liquorShopName,
                 liquorName:liquorName,
                 liquorSize: liquorSize,
                 liquorPrice:liquorPrice,
                 liquorLocationLatitude:liquorLocationLatitude,
                liquorLocationLongitude:liquorLocationLongitude,
                liquorShopOwnerEmail:liquorShopOwnerEmail,
                phone:phone,
                website:website,
                fb_link:fb_link,
                twitter_link:twitter_link,
                youtube_link:youtube_link,

            });
    }
    deleteLiquorShop(pid) {
        return this.afs
            .collection('/liquorshops')
            .doc(pid.toString())
            .delete();
    }


    UpdateLiquorWithPrice(collection, liquorShopOwner,liquorLocation,id,liquorName,liquorCategory,SmallLiquorMinPrice,SmallLiquorMaxPrice,SmallLiquorNormalPrice,BigLiquorMinPrice,BigLiquorMaxPrice,BigLiquorNormalPrice,liquorShopId) {
        return this.afs
            .collection(`/${collection}`)
            .doc(id.toString())
            .update({
                liquorShopId:liquorShopId,
                liquorShopOwner:liquorShopOwner,
               liquorName:liquorCategory,
                liquorCategory:liquorName,
                SmallLiquorMinPrice:SmallLiquorMinPrice,
                SmallLiquorMaxPrice:SmallLiquorMaxPrice,
                SmallLiquorNormalPrice:SmallLiquorNormalPrice,
                BigLiquorMinPrice:BigLiquorMinPrice,
                BigLiquorMaxPrice:BigLiquorMaxPrice,
                BigLiquorNormalPrice:BigLiquorNormalPrice,

            });
    }
    deleteLiquorWithPrice(pid) {
        return this.afs
            .collection('/liquorPrice')
            .doc(pid.toString())
            .delete();
    }

    UpdateOrderData(collection, itemid,name,mail,price,order_date,orderid,shop_name) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                id: itemid,
                 name: name,
                 mail: mail,
                 price: price,
                 order_date:order_date,
                 orderid:orderid,
                 shop_name:shop_name,

            });
    }
    deleteOrder(pid) {
        return this.afs
            .collection('/orderHistory')
            .doc(pid.toString())
            .delete();
    }

    deleteEnquiryList(pid) {
        return this.afs
            .collection('/enquiryList')
            .doc(pid.toString())
            .delete();
    }

    UpdateLiquor(collection, itemid,liquorName) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                 liquorName:liquorName

            });
    }
    deleteLiquor(pid) {
        return this.afs
            .collection('/liquorName')
            .doc(pid.toString())
            .delete();
    }


    UpdateVisions(collection, itemid,visions) {
        return this.afs
            .collection(`/${collection}`)
            .doc(itemid.toString())
            .update({
                 vision: visions,

            });
    }
    deleteVisions(pid) {
        return this.afs
            .collection('/visions')
            .doc(pid.toString())
            .delete();
    }
    getAllliquorshops() {
        return this.afs.collection('/liquorshops').valueChanges();
    }






    // Todays Work 18/11/2021


//         locationWiseItem(lat, lng, radius) {
//         const geo = geofirex.init(firebase);
//         const center = geo.point(lat, lng);
//         const createdItemsCollection = geo.collection('createdItems');
//         const field = 'location';
//         return createdItemsCollection.within(center, radius, field);
//     }



getLiquorData(id) {
    return this.afs
        .collection('/liquorPrice', ref => ref.where('liquorShopId', '==', id))
        .valueChanges();
}
fetchDataByCollectionId(collection, shopid,categoryname) {
    return this.afs
        .collection(`/${collection}`, ref =>
            ref.where('liquorShopId', '==', shopid).where('liquorSegment', '==', categoryname)
        )
        .valueChanges();
}
getCartData(id) {
    return this.afs
        .collection('/cartItem', ref => ref.where('user_id', '==', id))
        .valueChanges();
}
UpdateCartData(collection, itemid,final_cart,total_value) {
    return this.afs
        .collection(`/${collection}`)
        .doc(itemid.toString())
        .update({
            cart_items:final_cart,
            totalCost:total_value

        });
}
}

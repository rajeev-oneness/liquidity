import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
   redirectTo: 'login',
   pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'otpverification',
    loadChildren: () => import('./otpverification/otpverification.module').then( m => m.OtpverificationPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'ordersummary',
    loadChildren: () => import('./ordersummary/ordersummary.module').then( m => m.OrdersummaryPageModule)
  },
  {
    path: 'orderdetails',
    loadChildren: () => import('./orderdetails/orderdetails.module').then( m => m.OrderdetailsPageModule)
  },
  {
    path: 'mywallet',
    loadChildren: () => import('./mywallet/mywallet.module').then( m => m.MywalletPageModule)
  },
  {
    path: 'homenew',
    loadChildren: () => import('./homenew/homenew.module').then( m => m.HomenewPageModule)
  },
  {
    path: 'detectlocation',
    loadChildren: () => import('./detectlocation/detectlocation.module').then( m => m.DetectlocationPageModule)
  },
  {
    path: 'orderredeemed',
    loadChildren: () => import('./orderredeemed/orderredeemed.module').then( m => m.OrderredeemedPageModule)
  },
  {
    path: 'outlethome',
    loadChildren: () => import('./outlethome/outlethome.module').then( m => m.OutlethomePageModule)
  },
  {
    path: 'outlethomecompare',
    loadChildren: () => import('./outlethomecompare/outlethomecompare.module').then( m => m.OutlethomecomparePageModule)
  },
  {
    path: 'vaulthome',
    loadChildren: () => import('./vaulthome/vaulthome.module').then( m => m.VaulthomePageModule)
  },
  {
    path: 'orderdetailsredeemed',
    loadChildren: () => import('./orderdetailsredeemed/orderdetailsredeemed.module').then( m => m.OrderdetailsredeemedPageModule)
  },
  {
    path: 'vaultselected',
    loadChildren: () => import('./vaultselected/vaultselected.module').then( m => m.VaultselectedPageModule)
  },
  {
    path: 'vaultcart',
    loadChildren: () => import('./vaultcart/vaultcart.module').then( m => m.VaultcartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

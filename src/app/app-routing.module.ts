import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./services/auth-guard.service";
import {NoAuthGuardService} from "./services/no-auth-guard.service";

const routes: Routes = [
  {
    path: 'home',
    //canActivate: [AuthGuardService],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ask-login-register',
    //canActivate: [NoAuthGuardService],
    loadChildren: () => import('./ask-login-register/ask-login-register.module').then( m => m.AskLoginRegisterPageModule)
  },
  {
    path: 'register',
    //canActivate: [NoAuthGuardService],
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    //canActivate: [NoAuthGuardService],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

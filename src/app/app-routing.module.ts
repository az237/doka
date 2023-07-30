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
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then( m => m.PlayPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'classement',
    loadChildren: () => import('./classement/classement.module').then( m => m.ClassementPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

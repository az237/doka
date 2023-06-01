import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskLoginRegisterPage } from './ask-login-register.page';

const routes: Routes = [
  {
    path: '',
    component: AskLoginRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskLoginRegisterPageRoutingModule {}

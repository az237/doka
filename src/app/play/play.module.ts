import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPageRoutingModule } from './play-routing.module';

import { PlayPage } from './play.page';
import {SelectLevelComponent} from "../shared/select-level/select-level.component";
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";
import {SelectTypeChoiceComponent} from "../shared/select-type-choice/select-type-choice.component";
import {SelectModuleComponent} from "../shared/select-module/select-module.component";
import {SelectModeComponent} from "../shared/select-mode/select-mode.component";
import {LoadingGameComponent} from "../shared/loading-game/loading-game.component";
import {CurrentPlayComponent} from "../shared/current-play/current-play.component";
import {RecapPlayComponent} from "../shared/recap-play/recap-play.component";
import {StatistiquePageModule} from "../statistique/statistique.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayPageRoutingModule,
    AskLoginRegisterPageModule,
    StatistiquePageModule
  ],
    declarations: [PlayPage, SelectLevelComponent, SelectTypeChoiceComponent, SelectModuleComponent, SelectModeComponent, LoadingGameComponent, CurrentPlayComponent, RecapPlayComponent]
})
export class PlayPageModule {}

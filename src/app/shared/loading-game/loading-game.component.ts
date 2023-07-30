import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../services/play.service";

@Component({
  selector: 'app-loading-game',
  templateUrl: './loading-game.component.html',
  styleUrls: ['./loading-game.component.scss'],
})
export class LoadingGameComponent implements OnInit {

  progress = 0;

  constructor(private playService: PlayService) {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        this.playService.currentPlay.etat = 1;
        /*setTimeout(() => {
          this.progress = 0;
        }, 1000);*/
      }
    }, 50);
  }

  ngOnInit() {}

}

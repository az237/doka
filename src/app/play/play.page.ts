import {Component, ElementRef, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import {PlayService} from "../services/play.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit  {
  etat = 0;

  currentPlayObservable = new Observable((observer) => {
    observer.next(this.playService.currentPlay);
    setInterval(() => {
      observer.next(this.playService.currentPlay);
    }, 1000);
  });

  constructor(public playService: PlayService) {
  }

  ngOnInit() {
    /*this.currentPlayObservable.subscribe((value) => {
      if(this.playService.currentPlay.level === 0) {
        this.modalSelectLevel.present();
      } else if(this.playService.currentPlay.typeQuestion === 0) {
        this.modalSelectTypeQuestion.present();
      } else if(this.playService.currentPlay.module === 0) {
        this.modalSelectModule.present();
      } else if(this.playService.currentPlay.mode === 0) {
        this.modalSelectMode.present();
      }
    });*/
  }



}

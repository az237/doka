import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  currentPlay: any = {
    level: 0,
    typeQuestion: 0,
    module: 0,
    mode: 0
  };

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../services/play.service";

@Component({
  selector: 'app-current-play',
  templateUrl: './current-play.component.html',
  styleUrls: ['./current-play.component.scss'],
})
export class CurrentPlayComponent implements OnInit {

  constructor(public playService: PlayService) { }

  ngOnInit() {}

}

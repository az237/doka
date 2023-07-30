import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../services/play.service";

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.scss'],
})
export class SelectLevelComponent implements OnInit {

  constructor(public playService: PlayService) { }

  ngOnInit() {}

}

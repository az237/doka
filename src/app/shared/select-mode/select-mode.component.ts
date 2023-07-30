import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../services/play.service";

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss'],
})
export class SelectModeComponent implements OnInit {

  constructor(public playService: PlayService) { }

  ngOnInit() {}

}

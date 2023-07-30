import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../services/play.service";

@Component({
  selector: 'app-select-type-choice',
  templateUrl: './select-type-choice.component.html',
  styleUrls: ['./select-type-choice.component.scss'],
})
export class SelectTypeChoiceComponent implements OnInit {

  constructor(public playService: PlayService) { }

  ngOnInit() {}

}

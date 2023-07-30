import { Component, OnInit } from '@angular/core';
import {PlayService} from "../../services/play.service";

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.scss'],
})
export class SelectModuleComponent implements OnInit {

  items: any[] = ["Kintangulu dia NZA", "Kimuntu", "DISU-MU au MASU-MU", "Les BIMWELOS", "Intro. au KI-NSONO", "Techniques ZOLE", "NTINU", "Science KI-NDOKI", "KISONO DIA NZA","NDOSI",
  "Cosmogonie KONGO", "MUNU KIA NSI", "Intro. au couleurs", "Les 5 sens du MUNTU", "Techniques NTENTE", "MENGA", "Mystères BISELIYA", "MBONGO", "Le Muntu Multidim.", "DIA"]; // Le tableau d'éléments que vous souhaitez paginer
  pageSize: number = 10; // Le nombre d'éléments à afficher par page
  currentPage: number = 1; // La page actuelle

  constructor(public playService: PlayService) { }

  ngOnInit() {}

  paginate() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.items.slice(startIndex, endIndex);
  }

  get pages() {
    const pageCount = Math.ceil(this.items.length / this.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return pages;
  }
}

import {Component, OnInit} from '@angular/core';
import {AdNewsService} from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adNewsList = [];

  constructor(
    private adNewsService: AdNewsService,
  ) {
  }

  ngOnInit() {
    this.adNewsService.getAdNews().subscribe(adList => {
      this.adNewsList = adList;
    });

  }

}

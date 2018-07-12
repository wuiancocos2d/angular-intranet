import {Component, OnInit} from '@angular/core';
import {AdNewsService, ApisService, NewsService, MemoService} from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adNewsList = [];
  apiList = [];
  newsList = [];
  memoList = [];

  constructor(
    private adNewsService: AdNewsService,
    private apiService: ApisService,
    private newsService: NewsService,
    private memoService: MemoService,
  ) {
  }

  ngOnInit() {
    this.adNewsService.getAdNews().subscribe(adList => {
      this.adNewsList = adList;
    });
    this.apiService.getAPIs().subscribe(apiList => {
      this.apiList = apiList;
    });
    this.memoService.getMemos().subscribe(memos => {
      this.memoList = memos;
    });
    this.newsService.getNews().subscribe(news => {
      this.newsList = news;
    });
  }
}

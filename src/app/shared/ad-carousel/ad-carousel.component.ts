import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-ad-carousel',
  templateUrl: './ad-carousel.component.html',
  styleUrls: ['./ad-carousel.component.scss']
})


export class AdCarouselComponent implements OnInit {
  @Input() adNews: AdNewsElement[];
  @ViewChild('NzCarouselComponent') nzCarousel: NzCarouselComponent;

  constructor() {
  }

  ngOnInit() {
  }
  try() {
    console.log(this.nzCarousel);
  }
}

export interface AdNewsElement {
  title: string;
  subTitle: string;
  imgUrl: string;
}

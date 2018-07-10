import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-ad-carousel',
  providers: [NzCarouselComponent],
  templateUrl: './ad-carousel.component.html',
  styleUrls: ['./ad-carousel.component.scss']
})


export class AdCarouselComponent implements OnInit {
  @Input() adNews: AdNewsElement[];

  constructor(private nzcarousel: NzCarouselComponent) {
  }

  ngOnInit() {
  }
  try() {
    this.nzcarousel.next();
  }
}

export interface AdNewsElement {
  title: string;
  subTitle: string;
  imgUrl: string;
}

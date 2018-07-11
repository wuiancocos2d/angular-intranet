import {Component, OnInit, Input, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-ad-carousel',
  templateUrl: './ad-carousel.component.html',
  styleUrls: ['./ad-carousel.component.scss']
})


export class AdCarouselComponent implements OnInit, AfterViewInit {

  @Input() adNews: AdNewsElement[];
  @ViewChild('carousel', {read: NzCarouselComponent}) carsousel: NzCarouselComponent;

  @HostListener('window:resize') onResize() {
    this.carsousel.renderContent();
    console.log(1);
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}

export interface AdNewsElement {
  title: string;
  subTitle: string;
  imgUrl: string;
}

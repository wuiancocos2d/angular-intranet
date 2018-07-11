import {Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NzCarouselComponent} from 'ng-zorro-antd';
import {ContainerComponent} from '../layout/container/container.component';

@Component({
  selector: 'app-ad-carousel',
  templateUrl: './ad-carousel.component.html',
  styleUrls: ['./ad-carousel.component.scss']
})


export class AdCarouselComponent implements OnInit, AfterViewInit {

  @Input() adNews: AdNewsElement[];
  @ViewChild('carousel', {read: NzCarouselComponent}) carsousel: NzCarouselComponent;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.try();
  }

  try() {
    this.carsousel.next();
  }
}

export interface AdNewsElement {
  title: string;
  subTitle: string;
  imgUrl: string;
}

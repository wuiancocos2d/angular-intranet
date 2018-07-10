import {Component, Input, OnInit} from '@angular/core';
import { ImageBlockModel } from "./image.model";
import { TextBlockModel} from "./textBlock.model";

@Component({
  selector: 'app-ad-carousel-element',
  templateUrl: './ad-carousel-element.component.html',
  styleUrls: ['./ad-carousel-element.component.scss']
})

export class AdCarouselElementComponent implements OnInit {

  @Input() textBlock: TextBlockModel;
  @Input() imageBlock: ImageBlockModel;
  constructor() { }

  ngOnInit() {
  }

}

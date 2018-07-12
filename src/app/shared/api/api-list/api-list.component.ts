import {Component, Input, OnInit} from '@angular/core';
import {ApiModel} from '../../../core/models';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  @Input() apiList: ApiModel[];
  constructor() { }

  ngOnInit() {
  }

}

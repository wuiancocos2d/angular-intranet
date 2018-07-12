import {Component, Input, OnInit} from '@angular/core';
import {ApiModel} from '../../../core/models';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  @Input() api: ApiModel;
  constructor() {
  }

  ngOnInit() {
  }

}

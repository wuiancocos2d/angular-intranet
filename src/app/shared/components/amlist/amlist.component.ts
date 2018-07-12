import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-amlist',
  templateUrl: './amlist.component.html',
  styleUrls: ['./amlist.component.scss']
})
export class AmlistComponent implements OnInit {
  @Input() AmItems: AmItem[];
  @Input() title: string;
  constructor() {
  }

  ngOnInit() {
  }
}

interface AmItem {
  id: number;
  url: string;
  title: string;
  time: string;
}

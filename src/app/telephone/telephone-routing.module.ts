import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TelephoneComponent} from './telephone.component';

const routes: Routes = [
  {
    path: '',
    component: TelephoneComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class TelephoneRoutingModule { }

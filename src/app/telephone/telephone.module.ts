import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelephoneComponent} from './telephone.component';
import { TelephoneRoutingModule } from './telephone-routing.module';

// share component
import {SharedModule} from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TelephoneRoutingModule,
  ],
  declarations: [
    TelephoneComponent,
  ]
})
export class TelephoneModule { }

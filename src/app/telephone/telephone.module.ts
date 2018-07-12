import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelephoneComponent} from './telephone.component';
import { TelephoneRoutingModule } from './telephone-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TelephoneRoutingModule
  ],
  declarations: [
    TelephoneComponent,
  ]
})
export class TelephoneModule { }

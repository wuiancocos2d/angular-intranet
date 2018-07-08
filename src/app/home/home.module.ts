import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// share component
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent],
  providers: [
    HomeRoutingModule
  ]
})
export class HomeModule { }

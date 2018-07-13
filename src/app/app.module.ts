import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    SharedModule, // Share Module
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

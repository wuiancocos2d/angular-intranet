import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';

// share component
import {SharedModule} from '../shared';
import {AdNewsService, ApisService, MemoService, NewsService} from '../core/services';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataAdNewsService} from '../core/mock';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataAdNewsService, {dataEncapsulation: false}
    )
  ],
  declarations: [HomeComponent],
  providers: [
    HomeRoutingModule,
    AdNewsService,
    ApisService,
    NewsService,
    MemoService,
  ]
})
export class HomeModule {
}

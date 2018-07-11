import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd'; // Ant design  framework
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerComponent} from './layout/container/container.component';
import {AdCarouselComponent} from './ad-carousel/ad-carousel.component';
/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ApiListComponent } from './api/api-list/api-list.component';
import { ApiComponent } from './api/api/api.component';


registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule, // Ant design framework
  ],
  declarations: [HeaderComponent, ContainerComponent, AdCarouselComponent, ApiListComponent, ApiComponent],
  exports: [
    HeaderComponent, NgZorroAntdModule, BrowserAnimationsModule, ContainerComponent, AdCarouselComponent
  ],

  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{provide: NZ_I18N, useValue: zh_CN}]
})
export class SharedModule {
}

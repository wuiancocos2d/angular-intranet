import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd'; // Ant design  framework
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerComponent} from './layout/container/container.component';
/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales;
import { AdCarouselComponent } from './ad-carousel/ad-carousel.component'/zh';

registerLocaleData(zh);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgZorroAntdModule, // Ant design framework
    ],
    declarations: [ HeaderComponent, ContainerCompo, AdCarouselComponentnent],
    exports: [
        HeaderComponent, NgZorroAntdModule, BrowserAnimationsModule, ContainerComponent
    ],

    /** 配置 ng-zorro-antd 国际化 **/
    providers: [{provide: NZ_I18N, useValue: zh_CN}]
})
export class SharedModule {
}

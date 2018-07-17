import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelephoneComponent} from './telephone.component';
import { TelephoneRoutingModule } from './telephone-routing.module';

// share component
import {SharedModule} from '../shared';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TelephoneRoutingModule,
  ],
  declarations: [
    TelephoneComponent,
    SideNavComponent,
    ContactListComponent,
    ContactComponent,
  ]
})
export class TelephoneModule { }

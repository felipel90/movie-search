import { NgModule } from '@angular/core';
import { BaseComponent } from './base';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    BaseComponent
  ],
  declarations: [
    BaseComponent
  ],
  providers: [],
})

export class BaseModule { }

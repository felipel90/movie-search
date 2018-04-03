import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [],
})

export class HeaderModule { }

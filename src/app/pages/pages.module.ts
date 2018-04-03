import { NgModule } from '@angular/core';
import { BaseModule } from './base/base.module';
import { HomeModule } from './home/home.module';
import { MoviesDetailModule } from './movie-details/movie-details.module';

@NgModule({
  imports: [
    BaseModule,
    HomeModule,
    MoviesDetailModule
  ],
  exports: [
    BaseModule,
    HomeModule,
    MoviesDetailModule
  ],
  declarations: [],
  providers: [],
})

export class PagesModule { }

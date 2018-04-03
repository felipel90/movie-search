import { NgModule } from '@angular/core';
import { MovieDetailsPage } from './movie-details';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    MovieDetailsPage
  ],
  declarations: [
    MovieDetailsPage
  ],
  providers: []
})
export class MoviesDetailModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePage } from './home';
import { MovieService } from '../../services/movie/movie.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    HomePage
  ],
  declarations: [
    HomePage
  ],
  providers: [MovieService],
})

export class HomeModule { }

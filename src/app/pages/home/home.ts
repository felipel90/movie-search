import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomePage implements OnInit {
  movieData: any;
  movies: any;
  
  constructor(
    private _movie: MovieService,
    private route: Router
  ) { }

  public doSearch(movie: string) {
    return this._movie.searchMovie(movie).subscribe((res) => {
      this.movies = res;
    })
  }

  public goMovieDetail(movieID: string) {
    this._movie.getMovieDetails(movieID).subscribe((res) => {
      this.route.navigate(['movie', movieID])
    })
  }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.scss']
})
export class MovieDetailsPage implements OnInit {
  movieID: string;
  movieDetails: any;

  constructor(
    private _movie: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieID = this.activatedRoute.snapshot.params.id;
    this._movie.getMovieDetails(this.movieID).subscribe((res) => {
      this.movieDetails = res;
    })
  }

}

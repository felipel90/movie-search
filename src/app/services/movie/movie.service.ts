import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

const api_url = 'https://omdbapi.com/';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  searchMovie(value): Observable<any> {
    return this.http.get(`${api_url}?s=${value}&plot=full&apikey=fc45bbcf`)
  }

  getMovieDetails(id): Observable<any> {
    return this.http.get(`${api_url}?i=${id}&plot=full&apikey=fc45bbcf`)
  }
}

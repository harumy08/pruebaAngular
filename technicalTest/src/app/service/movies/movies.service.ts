import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as data from '../../../assets/json/movies.json';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}


  getMovies(): Observable<any>{
    return  this.httpClient.get("assets/json/movies.json");
  }
}

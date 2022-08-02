import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Data } from '../models/movies.model';
import { MoviesService } from "../service/movies.service";




@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent  {

  constructor(private movieService: MoviesService) { }

  columnas: string[] = ['title', 'year', 'cast', 'genres'];

  movies: Data[] = [];

  dataSource:any; 

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  ngOnInit() {

  /* this.movieService.getMovies().subscribe(data => {
    this.dataSource = data;
  });*/

  this.movieService.getMovies().subscribe(data => {
   // this.dataSource = new MatTableDataSource(data);
    this.dataSource = new MatTableDataSource<Data>(data);
    this.dataSource.paginator = this.paginator;
  });
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }  


}


export class Movie {
  constructor(public title: string, public year: string, public cast: string, public genres: string) {}
}

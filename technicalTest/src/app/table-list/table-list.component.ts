import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Data } from '../models/movies.model';
import { MoviesService } from "../service/movies/movies.service";

//Movieservice es el servicio que esta llamando a nuestro json, como prueba de datos, se creo un modelo para nuestra tabla
//Y se usa Tabla de angular material para la vista, ya que no es mas facil integar la paginación y buscador
//De escalar el proyecto y utilizar otros componentes de angular material, se debe crear un archivo que solo llame a estos componentes


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent  {

  constructor(private movieService: MoviesService) { }

  //Se inicializan las columnas de nuestra tabla

  columnas: string[] = ['title', 'year', 'cast', 'genres'];

  //Inicializamos Data

  movies: Data[] = [];

  dataSource:any; 

  //Utilizamos ViewChild para implementar nuestra paginación

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  ngOnInit() {
  //Hacemos la llamada a nuestro servicio, y el resultado se imprime en nuestra tabla
  this.movieService.getMovies().subscribe(data => {
    this.dataSource = new MatTableDataSource<Data>(data);
    this.dataSource.paginator = this.paginator;
  });
  }
  
  //Creamos nuestra funcion para buscar y filtrar, recordemos que es una busqueda directa en vista
  //se ejecuta cada vez que el usuario ingresa o borra un caracter en el control mat-input
  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }  


}

//Se declara la clase Movie después de la clase 'TableListComponent'
export class Movie {
  constructor(public title: string, public year: string, public cast: string, public genres: string) {}
}

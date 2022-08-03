import { Component, OnInit } from '@angular/core';
//Se declara una pequeña interface, para usar el menu de una manera más dinamica, de crecer el proyecto, se debería crear
//en archivos independientes

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

//Se declara una interface para adjuntar propiedades al menu, a partir de aqui se puede agregar iconos,etc
export const ROUTES: RouteInfo[] = [
    { path: '/welcome', title: 'Welcome',  class: '' },
    { path: '/table-list', title: 'Movies',  class: '' },
    { path: '/contact', title: 'Contact',   class: '' }
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}

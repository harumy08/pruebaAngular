import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    //Se usa loadchildren para que tenga carga diferida y sobre este modulo se pueden encontrar las rutas respectivas
    children: [{
      path: '',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    }]
  }
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
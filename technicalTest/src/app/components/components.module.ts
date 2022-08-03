import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
    ],
    declarations: [
      FooterComponent,
      NavbarComponent
    ],
    exports: [
      FooterComponent,
      NavbarComponent
    ]
  })
  export class ComponentsModule { }


  //En este componente se mandan a llamar, los componentes de utilidad, footer, navbar en este caso, de escalarse el proyecto, pueden
  //integrarse aqui headers, navbars, toolbar, etc. Componentes que formar parte de nuestro Layout, vista y componente padre de nuestro admin
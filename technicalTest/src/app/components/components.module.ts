import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
    ],
    declarations: [
      FooterComponent,
      NavbarComponent,
      ToolbarComponent
    ],
    exports: [
      FooterComponent,
      NavbarComponent,
      ToolbarComponent
    ]
  })
  export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { WelcomeComponent } from '../welcome/welcome.component';
import { TableListComponent } from '../table-list/table-list.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WelcomeComponent,
    TableListComponent,
    ContactComponent
  ]
})

export class LayoutModule {}

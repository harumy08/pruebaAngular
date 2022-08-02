import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { WelcomeComponent } from '../welcome/welcome.component';
import { TableListComponent } from '../table-list/table-list.component';
import { ContactComponent } from '../contact/contact.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule
  ],
  declarations: [
    WelcomeComponent,
    TableListComponent,
    ContactComponent
  ]
})

export class LayoutModule {}

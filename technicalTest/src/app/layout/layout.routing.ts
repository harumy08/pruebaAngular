import { Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { TableListComponent } from '../table-list/table-list.component';
//se creo una carpeta con componetes donde pueden existir tipo footer, header, navbar, y nos ayuda a mantener mas limpio nuestro codigo y con mejor arquitectura
import { ContactComponent } from '../contact/contact.component';

export const LayoutRoutes: Routes = [
    { path: 'welcome',      component: WelcomeComponent },
    { path: 'table-list',   component: TableListComponent },
    { path: 'contact',     component: ContactComponent }
];
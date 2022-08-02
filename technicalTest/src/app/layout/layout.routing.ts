import { Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { TableListComponent } from '../table-list/table-list.component';
import { ContactComponent } from '../contact/contact.component';

export const LayoutRoutes: Routes = [
    { path: 'welcome',      component: WelcomeComponent },
    { path: 'table-list',   component: TableListComponent },
    { path: 'contact',     component: ContactComponent }
];
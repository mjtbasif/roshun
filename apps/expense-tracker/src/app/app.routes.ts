import { Route } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ErrorPageComponent } from './container/error-page/error-page.component';

export const appRoutes: Route[] = [
    { path: '', component: DashboardComponent },
    { path: 'notes-of-nowhere', component: ErrorPageComponent },
    { path: '**', redirectTo: 'notes-of-nowhere' }
];
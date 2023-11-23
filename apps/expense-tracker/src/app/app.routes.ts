import { Route } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ErrorPageComponent } from './container/error-page/error-page.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { RecordComponent } from './feature/record/record.component';

export const appRoutes: Route[] = [
    { path: '', component: DashboardComponent },
    { path: 'profile', pathMatch: 'full', component: ProfileComponent },
    { path: 'expense', pathMatch: 'full', component: RecordComponent },
    { path: 'notes-of-nowhere', component: ErrorPageComponent },
    { path: '**', redirectTo: 'notes-of-nowhere' }
];
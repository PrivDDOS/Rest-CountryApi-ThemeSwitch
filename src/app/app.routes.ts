import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { InfoComponent } from './components/info/info';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'info',
        component: InfoComponent
    }
];

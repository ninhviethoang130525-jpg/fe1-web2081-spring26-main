import { Routes } from '@angular/router';
import { ListPage } from './pages/list-page/list-page';
import { AddPage } from './pages/add-page/add-page';
import { EditPage } from './pages/edit-page/edit-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: ListPage, 
    },
    {
        path: 'add',
        component: AddPage,
    },
    {
        path: 'edit/:id',
        component: EditPage,
    },
    {
        path: '**',
        redirectTo: 'list',
    }
];
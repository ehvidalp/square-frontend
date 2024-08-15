import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./routes/auth/login/login.component').then(m => m.LoginComponent) 
    },
    {
        path: 'tasks',
        loadComponent: () => import('./routes/task/tasks-container/tasks-container.component').then(m => m.TasksContainerComponent)
    },
    { 
        path: '', 
        redirectTo: 'tasks', 
        pathMatch: 'full' 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
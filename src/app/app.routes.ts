import { Routes } from '@angular/router';
import { Task1Component } from './Tasks/task1/task1/task1.component';
import { Task2Component } from './Tasks/task2/task2/task2.component';

export const routes: Routes = [
  { path: 'Task-One', component: Task1Component, title: 'Task-One' },
  { path: 'Task-Two', component: Task2Component, title: 'Task-Two' },
  { path: '', redirectTo: 'Task-One', pathMatch: 'full' },
];

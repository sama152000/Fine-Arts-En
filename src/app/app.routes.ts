import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/Faculty-of-Fine-Arts/Pages/Home/Home.component';
import { FacultyOfFineArtsComponent } from './core/features/Faculty-of-Fine-Arts/Faculty-of-Fine-Arts.component';

export const routes: Routes = [


    {
    path: '',
    component: FacultyOfFineArtsComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]}
];

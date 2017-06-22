import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Component/home.component';
import { AboutComponent } from './Component/about.component';
import { HeaderComponent } from './Component/core/header/header.component';
import { UserComponent } from './Component/user/user.component';
import { PersonComponent } from './Component/person/person.component'
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'user', component: UserComponent},
    { path: 'person', component: PersonComponent}
];

export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);

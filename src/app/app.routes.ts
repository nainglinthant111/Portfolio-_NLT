import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'client', component: ClientComponent },
    { path: 'contact', component: ContactComponent },
];

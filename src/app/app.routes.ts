import { Routes } from '@angular/router';
import { SignupComponent } from './pages/login/signup.component';
import { LoginComponent } from './pages/signup/login.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent}
];

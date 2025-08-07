import { Routes } from '@angular/router';
import { SignupComponent } from './pages/login/signup.component';
import { LoginComponent } from './pages/signup/login.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "user", component: UserComponent, canActivate: [AuthGuard] }
];
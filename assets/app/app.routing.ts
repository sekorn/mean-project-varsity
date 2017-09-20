import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MainComponent} from "./main/main.component";

const APP_ROUTES : Routes = [
    { path: '', redirectTo: '/main', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'pricing', component: PricingComponent }
    // { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


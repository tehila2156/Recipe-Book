import { Routes } from '@angular/router';
import { AllRecipyComponent } from '../component/all-recipy/all-recipy.component';
import { AddRecipyComponent } from '../component/add-recipy/add-recipy.component';
import { SignInComponent } from '../component/sign-in/sign-in.component';
import { SignUpComponent } from '../component/sign-up/sign-up.component';
import { DetailsComponent } from '../component/details/details.component';



export const routes: Routes = [

    { path: 'AllRecipy', component: AllRecipyComponent },
    { path: 'AddRecipy', component: AddRecipyComponent },
    { path: 'Sing-In', component: SignInComponent },
    { path: 'Sign-Up', component: SignUpComponent },
    {path:"signup" ,component:SignUpComponent},
    {path:"details/:id",component:DetailsComponent},
    { path: '**', component: AllRecipyComponent }
     ];




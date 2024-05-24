import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { UserComponent } from "../user/user.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

export const routes: Routes = [{
    path: 'user',
    component: UserComponent
},
{
    path: 'userprofile',
    component: UserProfileComponent
},
{
    path: 'signup',
    component: SignUpComponent
}
]
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { BlockComponent } from './block/block.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { DeveloperComponent } from './developer/developer.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { OnomatopiaListComponent } from './onomatopia-list/onomatopia-list.component';

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'userprofile',
    component: UserProfileComponent
},
{
    path: 'directives',
    component: DirectivesComponent
},
{
    path: 'blocks',
    component: BlockComponent
},
{
    path: 'form',
    component: MyFormComponent
},
{
    path: 'menu',
    component: MenuComponent
},
{
    path: 'signup',
    component: SignUpComponent
},
{
    path: 'user',
    component: UserComponent
},
{
    path: 'developer',
    component: DeveloperComponent
},
{
    path: 'onomatopia',
    component: OnomatopiaListComponent
}
];


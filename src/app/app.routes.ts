import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { BlockComponent } from './block/block.component';

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'user',
    component: UserProfileComponent
},
{
    path: 'directives',
    component: DirectivesComponent
},
{
    path: 'blocks',
    component: BlockComponent
}
];


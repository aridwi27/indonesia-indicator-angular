import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
  path:'profile',
  component:ProfileComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path: '',
  pathMatch:'full',
  redirectTo:'/about'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

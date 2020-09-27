import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { RamdomUserComponent } from './test/ramdom-user/ramdom-user.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ramdom-users', component: RamdomUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { RamdomUserComponent } from './test/ramdom-user/ramdom-user.component';
const routes: Routes = [
  { path: 'ramdom-users', component: RamdomUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EnrollComponent} from './components/enroll/enroll.component';
import { LformComponent } from './components/lform/lform.component';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'enroll' , component : EnrollComponent },
  {path : 'lform' , component : LformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
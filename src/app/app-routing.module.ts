import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'app.component',
    pathMatch: 'full'
  },
 
  { path: 'create', component: CreateKittenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

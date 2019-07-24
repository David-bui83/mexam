import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AddComponent } from './add/add.component';
import { WriteComponent } from './write/write.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/movies'},
  {path:'movies',component:MoviesComponent,children:[
    {path:'add',component:AddComponent},
    {path:'',pathMatch:'full', redirectTo:'/movies'}
  ]},
  {path:'movies/write/:id',component:WriteComponent},
  {path:'movies/view/:id',component:ViewComponent},
  { path: '**', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

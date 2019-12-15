import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LayoutComponentComponent } from './core/layout-component/layout-component.component';



const routes: Routes = [
  {    path: '',    loadChildren: './home/home.module#HomeModule'  },
  {     path: 'home',     loadChildren: './home/home.module#HomeModule'   },
  {     path: 'projects',     loadChildren: './projects/projects.module#ProjectsModule'   },
     {     path: 'not-found',     component: NotFoundComponent   },
       {     path: '**',     redirectTo: 'not-found'   }
      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

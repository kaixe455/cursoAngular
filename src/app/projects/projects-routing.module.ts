import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';
import { NewprojectComponent } from './newproject/newproject.component';


const routes: Routes = [
  { path: '',    component: ProjectsComponent },
  { path: 'viewer/:id',    component: ViewerprojectComponent },
  { path: 'create',    component: NewprojectComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

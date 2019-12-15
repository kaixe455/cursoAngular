import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {
  public projects = environment.projects;
  public project: Project = {id: this.projects.length + 1, name: '' };
  constructor() {
  }

  ngOnInit() {
  }
  newProyecto() {
    this.project.id = this.projects.length;
    this.projects.push({ ...this.project });
  }
}

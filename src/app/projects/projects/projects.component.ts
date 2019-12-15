import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  constructor() { }
projects = environment.projects;

  ngOnInit() {
    const projects = environment.projects;
  }
}

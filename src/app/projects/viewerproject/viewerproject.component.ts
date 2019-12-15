import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public proyectId = '';
  constructor(activateRoute: ActivatedRoute) {
    this.proyectId = activateRoute.snapshot.params['id'];
   }
   projects = environment.projects;
  ngOnInit() {
    const projects = environment.projects;
  }

}

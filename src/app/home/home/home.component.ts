import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() { }
  public header = 'Contacts';
  public description = 'Manage your contact list';
  public numContacts: number;
  public counterClass = 'tag secondary';
  public formHidden = false;
  ngOnInit() {
    let projects = environment.projects;
    this.numContacts = projects.length;
  }
}

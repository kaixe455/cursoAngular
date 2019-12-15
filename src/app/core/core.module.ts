import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { FooterComponent } from './layout-component/footer/footer.component';
import { HeaderComponent } from './layout-component/header/header.component';
import { MainComponent } from './layout-component/main/main.component';
import { RouterModule } from '@angular/router';
import { Header2Component } from './layout-component/header2/header2.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [LayoutComponentComponent, FooterComponent, HeaderComponent, MainComponent, Header2Component, NotFoundComponent ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [LayoutComponentComponent]
})
export class CoreModule { }

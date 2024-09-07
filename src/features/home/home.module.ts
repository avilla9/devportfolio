import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      },
    ])
  ]
})
export class HomeModule { }

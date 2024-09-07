import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class LayoutModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { LayoutModule } from './layout/layout.module';
import { DataService } from 'src/shared/services/data.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
  providers: [DataService],
})
export class AppModule { }
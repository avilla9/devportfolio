import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DialogComponent } from './dialog/dialog.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    CardComponent,
    GalleryComponent,
    DialogComponent,
    SvgComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    GalleryComponent,
    DialogComponent,
    SvgComponent
  ],
})
export class ComponentModule { }

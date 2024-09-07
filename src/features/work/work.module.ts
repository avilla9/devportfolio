import { NgModule } from '@angular/core';
import { WorkComponent } from './work.component';
import { DetailComponent } from './detail/detail.component';
import { CollectionComponent } from './collection/collection.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorkComponent, CollectionComponent, DetailComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    NgSelectModule,
    RouterModule.forChild([
      { path: '', component: CollectionComponent },
      { path: 'detail/:title', component: DetailComponent }
    ])
  ]
})
export class WorkModule { }

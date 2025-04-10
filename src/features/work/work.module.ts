import { NgModule } from '@angular/core';
import { WorkComponent } from './work.component';
import { DetailComponent } from './detail/detail.component';
import { CollectionComponent } from './collection/collection.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/shared/components/component.module';

@NgModule({
  declarations: [WorkComponent, CollectionComponent, DetailComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
    NgSelectModule,
    ComponentModule,
    RouterModule.forChild([
      { path: '', component: CollectionComponent },
      { path: 'detail/:title/:id', component: DetailComponent },
      { path: '**', component: CollectionComponent },
    ])
  ]
})
export class WorkModule { }

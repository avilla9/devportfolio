import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../features/home/home.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:
      'work', loadChildren: () => import('../features/work/work.module').then(m => m.WorkModule)
  },
  {
    path:
      'home', loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

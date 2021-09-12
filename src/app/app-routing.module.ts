import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDashboardComponent } from './components/pages/category-dashboard/category-dashboard.component';

const routes: Routes = [
  {path: '', component: CategoryDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEmployeComponent } from './form-employe/form-employe.component';
import { TableEmployeComponent } from './table-employe/table-employe.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  { path: 'layout', component: TableEmployeComponent },
  { path: 'form-employe', component: FormEmployeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

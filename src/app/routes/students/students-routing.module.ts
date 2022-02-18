import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListConponent } from './students.component'
const routes: Routes = [
  {
    path: '', component: StudentListConponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

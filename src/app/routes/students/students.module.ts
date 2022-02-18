import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { StudentsRoutingModule } from './students-routing.module';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { TagSelectModule } from '@delon/abc/tag-select';
import { CurrencyPipeModule } from '@delon/util/pipes/currency';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { StudentListConponent } from './students.component';
import { EditStudentComponent } from './edit/edit.component';
const COMPONENTS: Type<void>[] = [StudentListConponent, EditStudentComponent];

@NgModule({
  imports: [
    SharedModule,
    StudentsRoutingModule,
    EllipsisModule,
    TagSelectModule,
    AvatarListModule,
    FooterToolbarModule,
    NzPaginationModule,
    NzStepsModule,
    CurrencyPipeModule
  ],
  declarations: COMPONENTS,
})
export class StudentsModule { }

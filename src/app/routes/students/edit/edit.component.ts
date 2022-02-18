import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { Cipher } from 'crypto';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { StudentServices } from '../students-services.service';

@Component({
  selector: 'edit-student',
  templateUrl: './edit.component.html'
})
export class EditStudentComponent {
  record: any = {};
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: 'Name', maxLength: 50 },
      password: { type: 'string', title: 'Password', maxLength: 50 },
      favoritemusic: { type: 'string', title: 'Favorite Music', maxLength: 50 },
      phone: { type: 'string', title: 'Phone', maxLength: 50 },
    },
    required: ['name', 'password', 'favoritemusic', 'phone'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 }
    }
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, private studentService: StudentServices) { }

  async save(value: any): Promise<void> {
    if (value.id) {
      this.studentService.update(value, value.id).subscribe()
    } else {
      this.studentService.create(value).subscribe()
    }
    this.msgSrv.success('Saved successfully');
    this.modal.close(value);
  }

  close(): void {
    this.modal.destroy();
  }
}

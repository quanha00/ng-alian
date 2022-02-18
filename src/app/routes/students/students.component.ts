import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StudentServices } from './students-services.service';
import { EditStudentComponent } from './edit/edit.component';
import { Student } from './student.model';

@Component({
  selector: 'list-student',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListConponent implements OnInit {
  q = {
    q: '',
    status: 'all'
  };
  loading = false;
  students!: Student[];
  avatar = 'https://media.istockphoto.com/vectors/student-avatar-flat-icon-flat-vector-illustration-symbol-design-vector-id1212812078?k=20&m=1212812078&s=170667a&w=0&h=Pl6TaYY87D2nWwRSWmdtJJ0DKeD5vPowomY9fyeqNOs='
  constructor(private studentService: StudentServices, private msg: NzMessageService, private modal: ModalHelper, private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.studentService.getAll().subscribe(res => {
      this.students = res;
      this.loading = false;
      this.cdr.detectChanges();
    })
  }

  openEdit(record: { id?: string } = {}): void {
    this.modal.create(EditStudentComponent, { record }, { size: 'md' }).subscribe(res => {
      this.getData();
    });
  }

  remove(id: string): void {
    const student = this.students.find(x => x.id === id);
    if (!student) return;
    this.studentService.delete(id)
      .subscribe(() => {
        this.students = this.students.filter(x => x.id !== id)
        this.cdr.detectChanges();
      });
  }
}

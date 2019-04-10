import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() address: string;
  private mode = 'add'; //default mode
  private id: string; //student ID


  onSubmit() {
    this.router.navigate(['/listStudents']);
    // console.log("You submitted: " + this.firstName + " " + this.lastName + " " + this.address);
    // this._myService.addStudents(this.firstName, this.lastName, this.address);
    if (this.mode == 'add')
      this._myService.addStudents(this.firstName, this.lastName, this.address);
    if (this.mode == 'edit')
      this._myService.updateStudent(this.id, this.firstName, this.lastName, this.address);

  }

  //initialize the call using StudentService 
  constructor(private _myService: StudentService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');
      }
      else {
        this.mode = 'add';
        this.id = null;
      }
    });
  }

}

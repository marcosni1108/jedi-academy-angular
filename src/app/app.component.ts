import { Student } from './student/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student: Student[] =[
    {name:'Luke', isJedi:true, temple:'Coruscant'},
    {name:'Han Solo', isJedi:false},
    {name:'Leia', isJedi:false},
  ]
}

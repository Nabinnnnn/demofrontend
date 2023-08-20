import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList:Student[]=[];
  searchValue:string='';
  constructor(private studentService:StudentService){

  }
  ngOnInit(): void {

    this.getStudents();
  }
   getStudents() {
    this.studentService.getAllStudents().subscribe(data=>{
      console.log(data);
      this.studentList=data;

    });
  }

deleteStudent(id:number){
  this.studentService.deleteStudent(id).subscribe(data=>

    {
      this.getStudents();
    })
}
search():void{
  
  this.studentService.searchStudent(this.searchValue).subscribe(students=>{
    this.studentList=students;
  })
}
  }

   
    

  


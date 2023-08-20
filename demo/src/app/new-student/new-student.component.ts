import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit{

   studentForm!: FormGroup;
   studentData=Student;
   id!:number;

  constructor(private formBuilder:FormBuilder,
  private studentService:StudentService,
  private router:Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
    this.studentForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      address:[''],
      email:[''],
      phoneNumber:[''],
      dob:['MM-DD-YYYY'],
      gender:[''],
      status:[''],
      active:[''],
    })
    //@ts-ignore
     this.id=this.route.snapshot.paramMap.get('id');
    if(this.id!==null){
      //@ts-ignore
      this.studentService.getStudentById(this.id).subscribe((studentdata=Student)=>{
        this.studentForm.patchValue(studentdata);
        
      })
    }
  }
  saveStudent():void{
    this.studentData=this.studentForm.value;
    //@ts-ignore
    this.studentData.active=this.studentData.active?"Yes":"No";
    console.log(this.studentData);
    if(this.id==null){
    this.studentService.addStudent(this.studentForm.value).subscribe((message:string)=>{
      console.log(message);
      this.router.navigate(['home']);
    })
  }
  else{
    //@ts-ignore
    this.studentService.updateStudent(this.studentData,this.id).subscribe((message:string)=>{
      console.log(message);
      this.router.navigate(['home']);
    })
     
  }


}}

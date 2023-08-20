import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "http://localhost:8080/students";
  

  constructor(private http: HttpClient) { }
  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);

  }
  deleteStudent(id:number): Observable<string>{
    //@ts-ignore
    return this.http.delete<string>(this.url.concat('/delete/').concat(String(id)), {responseType:'text'});
  }
  addStudent(student:Student):Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url,student,{responseType:'text'});
  }
  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(this.url.concat('/find/').concat(String(id)));
  }
  updateStudent(student:Student,id:number):Observable<string>{
    //@ts-ignore
    return this.http.put<string>(this.url.concat('/update/').concat(String(id)),student,{responseType:'text'});
  }
  searchStudent(keyWord:string):Observable<Student[]>{
    return this.http.get<Student[]>(this.url.concat('/').concat(keyWord));
  }
  

  }
  

  


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'home', component:StudentListComponent},
{path:'new', component:NewStudentComponent},
{path:'update/:id', component:NewStudentComponent},
{path:'signup', component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

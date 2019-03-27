import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NavigtionMenuComponent } from './navigtion-menu/navigtion-menu.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [{
  path: '',                     //default component to display
  component: ListStudentsComponent
}, 
{
  path: 'addStudent',         //when students added 
  component: NewStudentFormComponent
},
{
  path: 'editStudent/:_id',         //when students edited 
  component: NewStudentFormComponent
},
{
  path: 'listStudents',       //when students listed
  component: ListStudentsComponent
}, 
{
  path: '**',                 //when path cannot be found
  component: NotFoundComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent,
    NavigtionMenuComponent,
    NavigationMenuComponent,
    ListStudentsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

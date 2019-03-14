import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { StudentService } from './student.service';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';  

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

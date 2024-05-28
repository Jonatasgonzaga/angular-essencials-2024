import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { AlunoComponent } from './aluno.component';

@NgModule({ //Depedency Injection Paradigm
  declarations: [
    AppComponent, 
    UserComponent, 
    DashboardComponent, 
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

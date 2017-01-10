import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ProjectComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

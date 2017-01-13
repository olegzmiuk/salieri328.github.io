import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app/app.component';
import { HomeworkComponent } from './homework/homework.component';

@NgModule({
  imports: [ BrowserModule, MaterialModule.forRoot() ],
  declarations: [
    AppComponent,
    HomeworkComponent
  ],
  bootstrap: [ AppComponent ]
})

export class MainModule {}

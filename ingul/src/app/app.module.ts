import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    DragulaModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

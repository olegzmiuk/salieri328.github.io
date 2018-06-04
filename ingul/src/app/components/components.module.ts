import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import {
  CarComponent
} from './';

@NgModule({
  imports: [
    FormsModule,
    DragulaModule
  ],
  declarations: [
    CarComponent
  ],
  exports: [
    CarComponent
  ],
  providers: [
    // ExportToFileService,
  ],
  entryComponents: []
})
export class ComponentsModule { }

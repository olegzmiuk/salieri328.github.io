import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import {
  CarComponent
} from './';

@NgModule({
  imports: [
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

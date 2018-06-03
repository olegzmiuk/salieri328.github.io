import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(
    private dragulaService: DragulaService
  ) {
    dragulaService.drag.subscribe((value:any) => {
      console.log('drag', value);
      // this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value:any) => {
      console.log('drop', value);
      // this.onDrag(value.slice(1));
    });
  }

}

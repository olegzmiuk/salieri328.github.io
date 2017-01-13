import { Component, OnInit } from '@angular/core';
import { Homework } from './homework';
import { HomeworkService } from './homework.service';

@Component({
  selector: 'homework',
  template: require('./homework.html'),
  styles: [ require('./homework.css') ],
  providers: [ HomeworkService ]
})

export class HomeworkComponent implements OnInit {
  homework: Homework;

  constructor (private homeworkService: HomeworkService) {
  }

  ngOnInit() {
    this.homework = this.homeworkService.getHomework();
  }

};

import { Injectable } from '@angular/core';

@Injectable()
export class HomeworkService {
  getHomework() {
    return {
      id: 123,
      authorId: 123,
      authorName: 'author',
      title: 'homework from service'
    };
  }
}

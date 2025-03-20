import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BookListComponent } from './app/components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookListComponent],
  template: `
    <h1>Book Management System</h1>
    <app-book-list></app-book-list>
  `,
})
export class App {}

bootstrapApplication(App);
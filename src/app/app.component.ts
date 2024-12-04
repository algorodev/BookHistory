import { Component } from '@angular/core';
import { BookListComponent } from './components/book-list/book-list.component'

@Component({
  selector: 'app-root',
  imports: [BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookHistory';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  Authors = ['William Shakespeare', 'Emily Dickinson', 'H. P. Lovecraft',
    'Arthur Conan Doyle', 'Leo Tolstoy', 'Edgar Allan Poe',
    'Robert Ervin Howard', 'Rabindranath Tagore', 'Rudyard Kipling']

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  Books = [['Five Point Someone', 'One Night @ the Call Center', 'The 3 Mistakes of My Life'],
  ['2 States', 'Revolution 2020', 'Half Girlfriend'],
  ['One Indian Girl', 'The Girl in Room 105', 'One Arranged Murder']];
  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popular-books',
  templateUrl: './popular-books.component.html',
  styleUrls: ['./popular-books.component.css']
})
export class PopularBooksComponent implements OnInit {
  Books = ['Five Point Someone', 'One Night @ the Call Center',
    'The 3 Mistakes of My Life', '2 States', 'Revolution 2020', 'Half Girlfriend',
    'One Indian Girl', 'The Girl in Room 105', 'One Arranged Murder'];

  constructor() { }

  ngOnInit(): void {
  }

}

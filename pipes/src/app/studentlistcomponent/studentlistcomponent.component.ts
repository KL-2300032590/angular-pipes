import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentlistcomponent.component.html',
  styleUrls: ['./studentlistcomponent.component.css']
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'pardhu', section: 19 },
    { id: 2, name: 'saradhu', section: 20 },
    { id: 3, name: 'arun', section: 22 },
    { id: 4, name: 'amar', section: 21 }
  ];

  constructor() { }
}

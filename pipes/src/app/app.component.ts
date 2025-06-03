import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapitalizePipe } from './capitalize.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { LinkColorPipe } from './link-color.pipe';
import { NgStyle } from '@angular/common';
import { StudentListComponent } from './studentlistcomponent/studentlistcomponent.component'; 

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NgStyle , RouterOutlet , CapitalizePipe  , CurrencyFormatPipe,DateFormatPipe , LinkColorPipe , StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pardhu';
  price = 1243.423;
  today = new Date();
  isClicked = false;

  handleClick(event: Event) {
    event.preventDefault();
    this.isClicked = true;
   }
}
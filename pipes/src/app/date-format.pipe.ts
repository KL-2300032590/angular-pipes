import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string | number, format: string = 'shortDate'): string {
    if (!value) return '';

    const date = new Date(value);

    if (isNaN(date.getTime())) return '';

    // Map of simplified formats
    const formatOptions: { [key: string]: Intl.DateTimeFormatOptions } = {
      shortDate: { year: 'numeric', month: '2-digit', day: '2-digit' },
      fullDate: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      time: { hour: '2-digit', minute: '2-digit' },
      dateTime: {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      }
    };

    const options = formatOptions[format] || formatOptions['shortDate'];

    return new Intl.DateTimeFormat('en-IN', options).format(date);
  }
}

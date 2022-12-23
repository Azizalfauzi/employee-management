import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmployee',
})
export class SearchEmployeePipe implements PipeTransform {
  // pipe filter function untuk table
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return null;

    args = args.toLowerCase();
    return value.filter(function (data: any) {
      return JSON.stringify(data).toLocaleLowerCase().includes(args);
    });
  }
}

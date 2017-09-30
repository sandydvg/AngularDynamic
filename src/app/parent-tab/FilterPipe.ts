import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTableData'
})
export class FilterTableData implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}

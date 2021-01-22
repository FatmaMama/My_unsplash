import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchInput: string): any[] {
        if(!items) return [];
        if(!searchInput) return items;
        searchInput = searchInput.toLowerCase();
        return items.filter( it => {
        return it.label.toLowerCase().includes(searchInput);
        });
        }
}
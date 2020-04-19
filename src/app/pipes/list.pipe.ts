import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collectionFilter',
  pure: false
})
export class CollectionFilterPipe implements PipeTransform {
  transform(items: any[], collections: string[]): any[] {
    if (!items) { return []; }
    if (collections.length === 0) { return items; }
    
    return items.filter(item => {
      if (item === undefined) return [];
      return collections.some(collection => {
        if (collection === undefined) return [];

        return item.Collection.toUpperCase().includes(collection.toUpperCase())

        
      })
    })
  }
}

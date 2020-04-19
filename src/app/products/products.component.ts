import { Component, OnInit } from '@angular/core';
import { products } from '../../assets/productslist'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  show = 6;

  productsList : any = products
  products = ' '.repeat(12).split('').map((s, i) => i + 1)
  collections: any;
  selectedCollection: any = [];
  finalArray: any[];
  constructor() { }

  ngOnInit() {
    this.products = this.productsList
    this.collections = this.getCollections(this.products);

  }
  onScroll() {
    const length = this.products.length
    setTimeout(() => {
      const p = ' '.repeat(12).split('').map((s, i) => i + 1 + length)

      // This approach should be used to avoid creating another memory address to the array
      while(p.length) this.products.push(p.shift())
    }, 1000)
  }
  //getting dynamic values for collections
getCollections(collection){
var collectionsArray = [];
for (let i = 0; i < collection.length; i++) {
  const found = collectionsArray.some(el => el.collection === collection[i].Collection);
  if (found) {
    const index = collectionsArray.findIndex(el => el.collection === collection[i].Collection);
    collectionsArray[index].count = collectionsArray[index].count + 1;
  } else {
    collectionsArray.push({ collection: collection[i].Collection, count: 1 })
  }
}
return collectionsArray;
}
collectionChange(event){
  if (event.target.checked) {
    this.selectedCollection.push(event.target.value);
  } else {
    var index = this.selectedCollection.indexOf(event.target.value);
    if (index > -1) {
      this.selectedCollection.splice(index, 1);
    }
  }
}

}

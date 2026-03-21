import { Component, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h2>{{ currentUserName().toLocaleUpperCase() }}</h2>
      <p>Développeuse Front-end</p>
      <psl-user-card [(userName)]="currentUserName" [isPublic]="'true'" />
      <psl-product-card
        [name]="'Air Nike'"
        inStock
        [display-label]="'Chaussure de luxe'"
        [price]="145"
        (addedToCart)="onCartAdding($event)"
        (price-alert)="onPriceAlerting($event)"
      />
      <p>Cart Amount : {{ totalCartAmount() }}</p>
    </div>
  `,
  styles: `
    .container {
      background-color: green;
    }
    h2 {
      font-weight: bold;
    }
  `,
  imports: [UserCardComponent, ProductCardComponent],
})
export class HomeComponent {
  protected readonly currentUserName = signal<string>('Gilles');
  protected readonly totalCartAmount = signal<number>(0);

  onPriceAlerting(price: number) {
    console.log('total Amount need an upgrade of ' + price + ' €');
    this.totalCartAmount.update((previousPrice) => previousPrice + price);
  }

  onCartAdding(itemName: string) {
    console.log('new item added to the cart ', itemName);
  }
}

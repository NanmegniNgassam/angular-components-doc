import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'psl-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  name = input.required<string>();
  price = input<number>(0);
  inStock = input(false, { transform: booleanAttribute });
  label = input<string>('', { alias: 'display-label' });
}

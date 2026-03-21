import { booleanAttribute, Component, input, model } from '@angular/core';

@Component({
  selector: 'psl-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  userName = model.required<string>();
  isPublic = input(false, { transform: booleanAttribute });

  constructor() {}

  switchProfile() {
    this.userName.set('Pavel');
  }
}

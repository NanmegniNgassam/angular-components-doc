import { Component, Input, signal } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h2>{{ currentUserName().toLocaleUpperCase() }}</h2>
      <p>Développeuse Front-end</p>
      <psl-user-card [(userName)]="currentUserName" [isPublic]="'true'" />
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
  imports: [UserCardComponent],
  inputs: ['disable: classdisable'],
})
export class HomeComponent {
  protected readonly currentUserName = signal<string>('Gilles');
  @Input({ required: true }) value: string = '';
}

import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <donut-card 
          *ngFor="let donut of donuts"
          [donut]="donut"
        ></donut-card>
      </ng-container>

      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'abc001',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic'
      },
      {
        id: 'abc002',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: true,
        description: 'Sticky perfection'
      },
      {
        id: 'abc003',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 119,
        description: 'Chocolate drizzled with caramel'
      }
    ];
  }
}

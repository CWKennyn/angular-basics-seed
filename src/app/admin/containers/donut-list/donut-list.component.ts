import { Component, OnInit } from '@angular/core';

import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
      <div>
        {{ donut.name }}
        {{ donut.price }}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
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

    this.donut = this.donuts[0];
  }
}

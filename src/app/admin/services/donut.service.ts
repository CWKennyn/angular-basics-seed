import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  donuts: Donut[] = [
    {
      id: 'abc001',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chocoholic'
    },
    {
      id: 'abc002',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      promo: 'new',
      description: 'Sticky perfection'
    },
    {
      id: 'abc003',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 119,
      description: 'Chocolate drizzled with caramel'
    },
    {
      id: 'abc004',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour advocate'
    },
    {
      id: 'abc005',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'Delicious lucious lemon'
    }
  ];
  
  constructor() { }
}

import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private restaurants: Restaurant[] = [
    {
      id: 'r1',
      name: 'RM Putra Minang',
      address: 'Jl. Parung Panjang No. 199A',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/8/7404858/e89962287a7bfa7e8e8380a14f04cbb6.jpg',
      openHour: '07.00 - 23.00'
    },
    {
      id: 'r2',
      name: 'Warteg Bahari',
      address: 'Jl. Griya Mas No. 12',
      imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2019/01/10/3e706e44-adbe-4a53-832c-f771241f971f.jpeg?w=700&q=90',
      openHour: '07.00 - 21.00'
    },
    {
      id: 'r3',
      name: 'Warteg Mekar Jaya',
      address: 'Perumahan Garda Kencana A16/20, BSD',
      imageUrl: 'https://photos.wikimapia.org/p/00/04/86/07/87_full.jpg',
      openHour: '24 Jam'
    },
    {
      id: 'r4',
      name: 'RM LapanLapan',
      address: 'Jl. Andi Pangeran Pettarani No. 323',
      imageUrl: 'https://b.zmtcdn.com/data/pictures/8/7404858/e89962287a7bfa7e8e8380a14f04cbb6.jpg',
      openHour: '08.00 - 20.00'
    }
  ];
  constructor() { }

  getAllRestaurants() {
    return [...this.restaurants];
  }

  getRestaurant(restaurantId: string) {
    return {...this.restaurants.find( restaurant => {
      return restaurant.id === restaurantId;
    })};
  }
}

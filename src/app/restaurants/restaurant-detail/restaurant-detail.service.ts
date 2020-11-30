import { Injectable } from '@angular/core';
import { Food } from './restaurant-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailService {
  private foods: Food[] = [
    {
      id_food: '1',
      name: 'Rendang',
      imageUrl: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/05/23/2598383914.jpg',
      desc: 'Perpaduan kelembutan daging sapi dan bumbu rendang',
      harga: 'Rp.10.000'
    },
    {
      id_food: '2',
      name: 'Nasi Putih',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/12/11/20991395/20991395_f22e6791-b0bd-40aa-8734-0b4f8d697bd0_501_501.jpg',
      desc: 'Diolah dari beras pilihan',
      harga: 'Rp.5.000'
    },
    {
      id_food: 'Sambal Ijo',
      name: 'Rendang',
      imageUrl: 'https://1.bp.blogspot.com/-aIlI9t2CZRs/XxHIHi-EcYI/AAAAAAABz0g/CMloeTLu7O49asC7WKJ7wzJxFtehwAMrACLcBGAsYHQ/s750/resep%2Bsambal%2Bijo1.jpg',
      desc: 'Cabai segar yang diolah dengan baik',
      harga: 'Rp.7.000'
    }
  ];
  constructor() { }

  getAllFoods() {
    console.log('foods: ', this.foods);
    return [...this.foods];
  }

  getFoods(foodId: string){
    return {...this.foods.find( foods => {
      return foods.id_food === foodId;
    })}
  }
}

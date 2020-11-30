import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestaurantsService } from '../restaurants.service';
import { Food } from './restaurant-detail.model';
import { RestaurantDetailService } from './restaurant-detail.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  loadedRestaurant: Restaurant;
  foods: Food[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private restaurantDetailService: RestaurantDetailService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('restaurantId')) { return; }
      const restaurantId = paramMap.get('restaurantId');
      this.loadedRestaurant = this.restaurantsService.getRestaurant(restaurantId);
    });
  }

  ionViewWillEnter() {
    this.foods = this.restaurantDetailService.getAllFoods();
  }

}

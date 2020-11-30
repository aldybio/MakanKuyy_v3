import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurants: Restaurant[];
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.restaurants = this.restaurantsService.getAllRestaurants();
  }

}

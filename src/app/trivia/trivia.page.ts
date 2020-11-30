import { Component, OnInit } from '@angular/core';
import { TriviaService } from './trivia.service';
import { Trivia } from './trivia.model';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {
  trivias: Trivia[];
  constructor(
    private triviaService: TriviaService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.trivias = this.triviaService.getAllTrivias();
  }

}

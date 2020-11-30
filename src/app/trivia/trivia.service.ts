import { Injectable } from '@angular/core';
import { Trivia } from './trivia.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  constructor() { }

  private trivias: Trivia[] = [
    {
      id: 't1',
      content: 'According to CNN Travel Public Vote on World\'s 50 Best Foods, Rendang placed number 1',
      source: 'CNN Travel'
    },
    {
      id: 't2',
      content: 'Ini merupakan trivia kedua',
      source: 'Narasumber #2'
    },
    {
      id: 't3',
      content: 'Ini merupakan trivia ketiga',
      source: 'Narasumber #3'
    }
  ];

  getAllTrivias(){
    return [...this.trivias];
  }

  getTrivia(triviaId: string){
    return {...this.trivias.find(trivia => {
      return trivia.id === triviaId;
    })};
  }
}

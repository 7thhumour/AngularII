import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Hero } from '../shared/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
    if(!localStorage.getItem('heroes')) {
      let heroes = [{
        "id": 1,
        "name": "Tony Stark (Iron Man)",
        "age": 53,
        "birthday": "May 29",
        "height": "185cm",
        "image": "assets/images/tony-stark-iron-man.webp",
        "alive": false,
      },
      {
        "id": 2,
        "name": "Steve Rogers (Captain America)",
        "age": 34,
        "birthday": "July 4",
        "height": "185cm",
        "image": "assets/images/steve-rogers.webp",
        "alive": false,
      },
      {
        "id": 3,
        "name": "Bruce Banner (The Hulk)",
        "age": 54,
        "birthday": "December 18",
        "height": "250cm",
        "image": "assets/images/The-Incredible-Hulk.webp",
        "alive": true,
      },
      {
        "id": 4,
        "name": "Thor",
        "age": 1059,
        "birthday": null,
        "height": "192cm",
        "image": "assets/images/thor-lightning.webp",
        "alive": true,
      },
      {
        "id": 5,
        "name": "Natasha Romanoff (Black Widow)",
        "age": 39,
        "birthday": "December 3",
        "height": "164cm",
        "image": "assets/images/black-widow-1.webp",
        "alive": true,
      },
      {
        "id": 6,
        "name": "Peter Parker (Spider-Man)",
        "age": 19,
        "birthday": "August 10",
        "height": "170cm",
        "image": "assets/images/peter-parker-Cropped.webp",
        "alive": true,
      },
      {
        "id": 7,
        "name": "Clint Barton (Hawkeye)",
        "age": 53,
        "birthday": "June 18",
        "height": "173cm",
        "image": "assets/images/hawkeye.webp",
        "alive": true,
      },
      {
        "id": 8,
        "name": "Colonel James 'Rhodey' Rhodes (War Machine)",
        "age": 55,
        "birthday": "October 6",
        "height": "173cm",
        "image": "assets/images/Don-cheadle-as-rhodey-Cropped.webp",
        "alive": true,
      },
      {
        "id": 9,
        "name": "Samuel Thomas 'Sam' Wilson (Falcon/Captain America)",
        "age": 40,
        "birthday": "September 23",
        "height": "178cm",
        "image": "assets/images/Anthony-Mackie-Captain-America-4.webp",
        "alive": true,
      },
      {
        "id": 10,
        "name": "Wanda Maximoff (Scarlet Witch)",
        "age": 30,
        "birthday": "February 10",
        "height": "168cm",
        "image": "assets/images/Wanda-Scarlet-Witch-Cropped.webp",
        "alive": true,
      },
      {
        "id": 11,
        "name": "Vision",
        "age": 3,
        "birthday": "May 29",
        "height": "May",
        "image": "assets/images/Vision-Civil-War-Cropped.webp",
        "alive": true,
      },
      {
        "id": 12,
        "name": "Scott Lang (Ant-Man)",
        "age": null,
        "birthday": null,
        "height": "178cm",
        "image": "assets/images/antman-and-the-wasp-marvel-4.webp",
        "alive": true,
      }
      ]  
      localStorage.setItem('heroes', JSON.stringify(heroes)) 
    }
   }


  getHeroes(): Observable<any[]> {
    let heroes:any[]=[]
    if (localStorage.getItem('heroes'))
    {
      heroes = JSON.parse(localStorage.getItem('heroes')!)
    }
    return of(heroes)
  }

  getHero(id:number): Observable<any>
  {
    let heroes:Hero[]  = [];

    if (localStorage.getItem('heroes'))
    {
      heroes = JSON.parse(localStorage.getItem('heroes')!)
    }

    let hero:any = heroes.find(hero => hero.id === id)

    return of(hero)
  }

  async deleteHero(id: any){
    let heroes:Hero[] = []
    if (localStorage.getItem('heroes'))
    {
      heroes = JSON.parse(localStorage.getItem('heroes')!)
    }

    let hero = heroes.find(hero => hero.id === id)

    if (hero)
    {
      let index = heroes.indexOf(hero)
      heroes.splice(index, 1)
      await localStorage.setItem('heroes', JSON.stringify(heroes))
    }
  }
}

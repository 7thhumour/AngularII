import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero:any
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroService.getHero(+this.route.snapshot.params['id']).subscribe((hero: any) => {this.hero = hero})
  }

}

import {
  Component,
  OnInit,
} from '@angular/core';
import { Hero } from './hero';
import {
  ActivatedRoute,
  ParamMap,
  Router
} from '@angular/router';
import { HeroService } from './hero.service';
import { Observable } from 'rxjs/internal/Observable';
import {
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero$ | async as hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
        <label>name:
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </label>
      </div>
      <button (click)="gotoHeroes(hero)">back heroes</button>
    </div>
  `
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {
  }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getHero(params.get('id'));
      })
    );

    // 需要复用 HeroDetailComponent 的情况
    // const id = this.route.snapshot.paramMap.get('id');
    // this.hero$ = this.service.getHero(id);

    // 写法2
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.service.getHero(params.get('id')).subscribe((hero: Hero) => this.hero = hero);
    // });
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }
}

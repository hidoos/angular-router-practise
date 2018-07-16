import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap
} from '@angular/router';

import {
  Crisis,
  CrisisService
} from './crisis.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
          [class.selected]="crisis.id === selectedId"
          routerLinkActive="selected">
        <a [routerLink]="['./', crisis.id]">
          <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;

  private selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }
}

import { switchMap } from 'rxjs/operators';
import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { slideInDownAnimation } from '../animations';

import {
  Crisis,
  CrisisService
} from './crisis.service';
import { DialogService } from '../dialog.service';

@Component({
  template: `
    <div *ngIf="crisis$ | async as crisis">
      <h3>"{{ crisis.name }}"</h3>
      <div>
        <label>Id: </label>{{ crisis.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="crisis.name" placeholder="name"/>
      </div>
      <button (click)="gotoCrises(crisis)">go to Crisis List</button>
    </div>
  `,
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis$: Observable<Crisis>;
  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
    public dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCrisis(params.get('id')))
    );
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises(crisis?: Crisis): void {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
  }
}

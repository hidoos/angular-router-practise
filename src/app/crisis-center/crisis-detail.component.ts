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
    <div *ngIf="crisis">
      <h3>"{{ crisis.name }}"</h3>
      <div>
        <label>Id: </label>{{ crisis.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <p>
        <button (click)="save()">Save</button>
        <button (click)="cancel()">Cancel</button>
      </p>
    </div>
  `,
  animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });
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

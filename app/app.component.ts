import {
  Component, ElementRef
} from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;

  selectedFood1: string;
  selectedFood2: string;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  onFoodSelection1() {
    console.log(this.selectedFood1);
  }

  onFoodSelection2() {
    console.log(this.selectedFood2);
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
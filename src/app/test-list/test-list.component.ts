import { Component, Input } from '@angular/core';
import { Test } from '../models/test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html'
})
export class TestListComponent {
  @Input()
  tests: Test[] = [];

  ngOnInit() {
    if (this.tests.length > 0) {
      console.log(this.tests[0].name);
    }
    else {
      console.log('no tests');
    }
  }
}

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dish',
  templateUrl: './dish.component.html',
})
export class DishComponent {
  @Input() public dish: any;
}

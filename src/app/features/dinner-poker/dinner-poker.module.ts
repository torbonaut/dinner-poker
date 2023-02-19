import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinnerPokerComponent } from './pages/dinner-poker/dinner-poker.component';
import { RouterModule } from '@angular/router';
import { dinnerPokerRoutes } from './dinner-poker.routes';
import { DishComponent } from './components/dish/dish.component';



@NgModule({
  declarations: [
    DinnerPokerComponent,
    DishComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dinnerPokerRoutes)
  ]
})
export class DinnerPokerModule { }

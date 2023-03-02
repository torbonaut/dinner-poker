import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DishComponent } from './components/dish/dish.component';
import { PageDinnerPokerComponent } from './components/page-dinner-poker/page-dinner-poker.component';
import { dinnerPokerRoutes } from './dinner-poker.routes';



@NgModule({
  declarations: [
    DishComponent,
    PageDinnerPokerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dinnerPokerRoutes)
  ]
})
export class DinnerPokerModule { }

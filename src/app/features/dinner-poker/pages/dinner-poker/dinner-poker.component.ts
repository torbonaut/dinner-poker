import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { SupabaseService } from 'src/app/shared/services/supabase.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dinner-poker',
  templateUrl: './dinner-poker.component.html',
})
export class DinnerPokerComponent implements OnInit {
  public dishes$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public constructor(private readonly supabase: SupabaseService) {}

  async ngOnInit() {
    this.dishes$.next(await this.supabase.getDishes());
  }
}

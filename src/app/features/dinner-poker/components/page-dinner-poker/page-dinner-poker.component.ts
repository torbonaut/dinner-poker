import type { OnInit } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-page-dinner-poker',
  templateUrl: './page-dinner-poker.component.html',
})
export class PageDinnerPokerComponent implements OnInit {
  public dishes$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public constructor(private readonly supabase: SupabaseService) {}

  public async ngOnInit() {
    this.dishes$.next(await this.supabase.getDishes());
  }
}

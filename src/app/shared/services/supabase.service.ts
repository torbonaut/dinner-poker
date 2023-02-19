import type { OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import type { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { SUPABASE_KEY, SUPABASE_URL } from 'src/app/tokens/supabase.token';
import type { Database } from '../models/supabase.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private readonly client: SupabaseClient<Database>;

  public constructor(
    @Inject(SUPABASE_URL) supabaseURL: string,
    @Inject(SUPABASE_KEY) supabaseKey: string
  ) {
    this.client = createClient<Database>(supabaseURL, supabaseKey);
  }

  public async getDishes() {
    const { data, error } = await this.client.from('dishes').select('*');

    if (error && error instanceof Error) {
      throw error;
    }
    console.log(data);

    return data;
  }
}

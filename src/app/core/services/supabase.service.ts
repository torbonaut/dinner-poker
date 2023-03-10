import { Inject, Injectable } from '@angular/core';
import type {AuthChangeEvent, Session, SupabaseClient, User,AuthSession} from '@supabase/supabase-js';
import { createClient} from '@supabase/supabase-js';
import { SUPABASE_KEY, SUPABASE_URL } from 'src/app/tokens/supabase.token';
import type {Profile} from "../models/profile.model";
import type { Database } from '../models/supabase.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private readonly supabaseClient: SupabaseClient<Database>;

  private _session: AuthSession | null = null;

  public constructor(
    @Inject(SUPABASE_URL) supabaseURL: string,
    @Inject(SUPABASE_KEY) supabaseKey: string
  ) {
    this.supabaseClient = createClient<Database>(supabaseURL, supabaseKey);
  }

    /**
     * AUTHORISATION
     */
  public get session() {
        // eslint-disable-next-line promise/prefer-await-to-then
    return this.supabaseClient.auth.getSession().then( ({ data }) => {
        this._session = data.session;
    });
  }

  public profile(user: User) {
      return this.supabaseClient.from('profiles').select('username, avatar_urk').eq('id', user.id).single();
  }

  public authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabaseClient.auth.onAuthStateChange(callback);
  }

  public async signIn(email: string) {
    return this.supabaseClient.auth.signInWithOtp({ email });
  }

  public async signOut() {
    return this.supabaseClient.auth.signOut();
  }

  public updateProfile(profile: Profile) {
      const update = {
          ...profile,
            updated_at: new Date()
      }

      return this.supabaseClient.from('profiles').upsert(update);
  }

  public async downloadAvatar(path: string) {
      return this. supabaseClient.storage.from('avatars').download(path);
  }

  public async uploadAvatar(filePath: string, file: File) {
        return this.supabaseClient.storage.from('avatars').upload(filePath, file);
  }

    /**
     * DISHES
     */

  public async getDishes() {
    const { data, error } = await this.supabaseClient.from('dishes').select('*');

    if (error && error instanceof Error) {
      throw error;
    }

    console.log(data);

    return data;
  }
}

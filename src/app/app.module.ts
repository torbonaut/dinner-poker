import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {PageLoginComponent} from "./shared/components/page-login/page-login.component";
import { SUPABASE_KEY, SUPABASE_URL } from './tokens/supabase.token';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageLoginComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [
    {
      provide: SUPABASE_URL,
      useValue: 'https://kchiejoqjfdwbmtwxymf.supabase.co',
    },
    {
      provide: SUPABASE_KEY,
      useValue:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaGllam9xamZkd2JtdHd4eW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3MjM1MDQsImV4cCI6MTk5MjI5OTUwNH0.GW9cfXgRuAUVTl_kt5hoCvTxl6Jejr5s8YA-Nsplao0',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

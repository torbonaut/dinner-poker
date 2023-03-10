import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {SupabaseService} from "../services/supabase.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{
    private constructor(private readonly supabase: SupabaseService, private readonly router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        void this.router.navigateByUrl('/login');
        return false;
    }
}

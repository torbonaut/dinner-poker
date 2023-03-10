import {ChangeDetectionStrategy, Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {SupabaseService} from "../../services/supabase.service";
import {RouteDataService} from "../../services/route-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLoginComponent {
    private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private signInForm = this.formBuilder.group({
        email: '',
    })

    public constructor(private readonly supabase: SupabaseService, private readonly formBuilder: FormBuilder, private readonly routeDataService: RouteDataService, activatedRoute: ActivatedRoute) {
        this.routeDataService.updateRouteData(activatedRoute.snapshot.data['showHeader'] );
    }


    public async onSubmit(): Promise<void> {
        try {
            this.loading$.next(true);
            const email = this.signInForm.value.email as string;
            const { error } = await this.supabase.signIn(email);
            if (error) {
                throw error;
            }

            // alert('Check your email for the login link!')
        } catch (error) {
            if (error instanceof Error) {
 //               alert(error.message);
            }
        } finally {
            this.signInForm.reset()
            this.loading$.next(false);
        }
    }

}

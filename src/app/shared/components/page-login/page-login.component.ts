import {ChangeDetectionStrategy, Component} from "@angular/core";
import type {FormBuilder} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import type {SupabaseService} from "../../services/supabase.service";

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoginComponent {
    private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private signInForm = this.formBuilder.group({
        email: '',
    })

    private constructor(private readonly supabase: SupabaseService, private readonly formBuilder: FormBuilder) {
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

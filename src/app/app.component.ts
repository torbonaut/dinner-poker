import {
    Component,
    ChangeDetectionStrategy,
} from '@angular/core';
import {map, Observable} from "rxjs";
import {RouteDataService} from "./core/services/route-data.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    public title = 'page-dinner-poker';

    public showHeader$: Observable<boolean | undefined>;

    public constructor(private readonly routeDataService: RouteDataService) {
        this.showHeader$ = this.routeDataService.routeData$.pipe(map(routeData => routeData.showHeader));
    }
}

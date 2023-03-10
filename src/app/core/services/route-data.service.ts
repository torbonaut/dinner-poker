import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import type {RouteData} from "../models/route-data.model";

@Injectable({ providedIn: 'root'})
export class RouteDataService {

    public routeData$: Subject<RouteData> = new Subject<RouteData>();

    public  updateRouteData(routeData: RouteData): void {
        this.routeData$.next(routeData);
    }
}

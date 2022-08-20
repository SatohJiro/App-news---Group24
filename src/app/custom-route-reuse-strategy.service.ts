import {ActivatedRoute, ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router';
import {BaseRouteReuseStrategy} from "./base-route-reuse-strategy.service";
import {map} from "rxjs";


export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig!.path === `trang-chu`;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRoutes.set(route.routeConfig!.path!, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.storedRoutes.get(route.routeConfig!.path!);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null  {
    return this.storedRoutes.get(route.routeConfig!.path!) as DetachedRouteHandle;
  }

}

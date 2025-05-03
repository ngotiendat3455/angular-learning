import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coordinates, SubmenuPage } from './interfaces/SubmenuInterface';
import { sublinks } from './data/sublink';

@Injectable({
  providedIn: 'root'
})
export class SubmenuService {

  constructor() { }

  sidebarBeharvior = new BehaviorSubject(false);
  submenuBehavior = new BehaviorSubject(false);
  pageBehavior = new BehaviorSubject<SubmenuPage>({ page: '', links: [] });
  locationBehavior = new BehaviorSubject<Coordinates>({});

  readonly isSubmeuOpen$: Observable<boolean> = this.submenuBehavior.asObservable();
  readonly isSidebarOpen$: Observable<boolean> = this.sidebarBeharvior.asObservable();
  readonly page$: Observable<SubmenuPage> = this.pageBehavior.asObservable();
  readonly location$: Observable<Coordinates> = this.locationBehavior.asObservable();

  openSidebar(){
    this.sidebarBeharvior.next(true)
  }

  closeSidebar(){
    this.sidebarBeharvior.next(false)
  }

  openSubmenu(text: string, coordinates: Coordinates){
    const foundPage = sublinks.find((ele) => ele.page.toLowerCase() == text.toLowerCase());
    console.log('foundPage', foundPage);
    if (foundPage) {
      this.pageBehavior.next(foundPage)
      this.locationBehavior.next(coordinates);
      this.submenuBehavior.next(true);
    }
  }

  closeSubmenu(){
    this.submenuBehavior.next(false);
  }

   // Getter methods for components to access current values
   getCurrentSidebarState(): boolean {
    return this.sidebarBeharvior.getValue();
  }

  getCurrentSubmenuState(): boolean {
    return this.submenuBehavior.getValue();
  }

  getCurrentPage(): SubmenuPage {
    return this.pageBehavior.getValue();
  }

  getCurrentLocation(): Coordinates {
    return this.locationBehavior.getValue();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarModalServiceService {
  constructor() { }
  private readonly sidebarBehavor = new BehaviorSubject(false);
  private readonly modalBehavor = new BehaviorSubject(false);

  readonly isSidebarOpen$: Observable<boolean> = this.sidebarBehavor.asObservable();
  readonly isModalBehavor$: Observable<boolean> = this.modalBehavor.asObservable();

  openSidebar(){
    this.sidebarBehavor.next(true);
  }

  closeSidebar(){
    this.sidebarBehavor.next(false);
  }

  openModal() {
    this.modalBehavor.next(true);
  }

  closeModal() {
    this.modalBehavor.next(false);
  }

  
}

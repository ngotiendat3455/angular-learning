import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Coordinates, SubmenuPage } from '../interfaces/SubmenuInterface';
import { SubmenuService } from '../submenu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SubmenuComponent implements OnInit, OnDestroy {
  isSubmenuOpen!: Observable<boolean>;
  currentPage!: Observable<SubmenuPage>;
  currentLocation!: Observable<Coordinates>;

  columnClass: string = 'col-2';
  private pageSubscription: Subscription | undefined;

  constructor(private uiStateService: SubmenuService) {
    // Initialize the observables here or inject the service to get the values
     this.isSubmenuOpen = this.uiStateService.isSubmeuOpen$;
     this.currentPage = this.uiStateService.page$;
     this.currentLocation = this.uiStateService.location$;
  }

  ngOnInit(): void {
      this.pageSubscription = this.currentPage.subscribe((page) => {
        if (page.links.length === 3) {
          this.columnClass = 'col-3';
        } else if (page.links.length > 3) {
          this.columnClass = 'col-4';
        } else {
          this.columnClass = 'col-2';
        }
      });
  }

  ngOnDestroy(): void {
    if (this.pageSubscription) {
      this.pageSubscription.unsubscribe();
    }
  }
}

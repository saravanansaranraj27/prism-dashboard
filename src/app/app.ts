import { Component, signal } from '@angular/core';
import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { SkeletonLoaderComponent } from './shared/components/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonLoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isLoading = signal(false);

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading.set(false);
        }, 800);
      }
    });
  }
}

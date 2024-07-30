import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Session Management Demo';

  constructor(private router: Router) {
    console.log('[AppComponent] Constructor called');
  }

  logNavigation(destination: string) {
    console.log(`[AppComponent] Attempting to navigate to: ${destination}`);
    const navigationEnd = this.router.events.subscribe(event => {
      console.log('[AppComponent] Router event:', event);
      if (event instanceof NavigationEnd) {
        console.log('[AppComponent] Navigation completed to:', event.urlAfterRedirects);
        navigationEnd.unsubscribe();
      }
      if (event instanceof NavigationError) {
        console.error('[AppComponent] Navigation error:', event.error);
        navigationEnd.unsubscribe();
      }
    });
  }
}

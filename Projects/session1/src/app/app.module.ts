import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlDemoComponent } from './Components/url-demo/url-demo.component';
import { BrowserStorageHostComponent } from './Components/browser-storage-host/browser-storage-host.component';
import { Router, NavigationEnd, NavigationError, NavigationCancel, NavigationStart } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, 
    UrlDemoComponent,
    BrowserStorageHostComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('[Router] Navigation started:', event.url);
      }
      if (event instanceof NavigationEnd) {
        console.log('[Router] Navigation completed:', event.url);
      }
      if (event instanceof NavigationError) {
        console.error('[Router] Navigation error:', event.error);
        console.error('[Router] Failed URL:', event.url);
      }
      if (event instanceof NavigationCancel) {
        console.warn('[Router] Navigation cancelled:', event);
        console.warn('[Router] Cancelled URL:', event.url);
      }
    });
  }
}

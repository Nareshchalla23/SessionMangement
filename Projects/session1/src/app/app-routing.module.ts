import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlDemoComponent } from './Components/url-demo/url-demo.component';
import { BrowserStorageHostComponent } from './Components/browser-storage-host/browser-storage-host.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { 
    path: 'url-demo', 
    component: UrlDemoComponent,
    canActivate: [() => {
      console.log('[Router] Attempting to activate url-demo route');
      return true;
    }]
  },
  {
    path: 'browser-storage',
    component: BrowserStorageHostComponent,
    canActivate: [() => {
      console.log('[Router] Attempting to activate browser-storage route');
      return true;
    }]
  },
  {
    path: 'session2',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Session2RemoteModule'
    }).then(m => m.Session2RemoteModule)
  },
  { path: '', redirectTo: 'url-demo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('[AppRoutingModule] Initialized');
  }
}

// In session2/src/session2-remote.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UrlCatchComponent } from './app/Components/url-catch/url-catch.component';
import { BrowserStorageRemoteComponent } from './app/Components/browser-storage-remote/browser-storage-remote.component';
import { ModuleFederationDemoComponent } from './app/Components/ModuleFederationDemoComponent';


const routes: Routes = [
  { path: 'url-catch', component: UrlCatchComponent },
  { path: 'browser-storage', component: BrowserStorageRemoteComponent },
  { path: 'module-federation-demo', component: ModuleFederationDemoComponent },
  { path: '', redirectTo: 'url-catch', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    UrlCatchComponent,
    BrowserStorageRemoteComponent,
    ModuleFederationDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Session2RemoteModule { }

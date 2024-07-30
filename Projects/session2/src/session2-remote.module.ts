import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UrlCatchComponent } from './app/Components/url-catch/url-catch.component';
import { BrowserStorageRemoteComponent } from './app/Components/browser-storage-remote/browser-storage-remote.component';

const routes: Routes = [
  { path: 'url-catch', component: UrlCatchComponent },
  { path: 'browser-storage', component: BrowserStorageRemoteComponent },
  { path: '', redirectTo: 'url-catch', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    UrlCatchComponent,
    BrowserStorageRemoteComponent
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

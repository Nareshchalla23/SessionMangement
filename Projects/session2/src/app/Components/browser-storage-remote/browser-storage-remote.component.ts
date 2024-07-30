import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-storage-remote',
  templateUrl: './browser-storage-remote.component.html',
  styleUrls: ['./browser-storage-remote.component.scss']
})
export class BrowserStorageRemoteComponent implements OnInit {
  hostStoredValue: string = '';

  ngOnInit() {
    this.loadHostStoredValue();
  }

  loadHostStoredValue() {
    const value = sessionStorage.getItem('hostStorageValue');
    this.hostStoredValue = value !== null ? value : 'No value received from host application';
  }

  refreshValue() {
    this.loadHostStoredValue();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-storage-host',
  templateUrl: './browser-storage-host.component.html',
  styleUrls: ['./browser-storage-host.component.scss']
})
export class BrowserStorageHostComponent implements OnInit {
  inputValue: string = '';
  storedValue: string | null = null;

  ngOnInit() {
    this.loadFromSessionStorage();
  }

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  saveToSessionStorage() {
    if (this.inputValue) {
      sessionStorage.setItem('hostStorageValue', this.inputValue);
      this.loadFromSessionStorage();
      this.inputValue = '';
    }
  }

  loadFromSessionStorage() {
    this.storedValue = sessionStorage.getItem('hostStorageValue');
  }

  clearSessionStorage() {
    sessionStorage.removeItem('hostStorageValue');
    this.loadFromSessionStorage();
  }
}

import { Component, OnInit } from '@angular/core';

interface Cookie {
  name: string;
  value: string;
}

@Component({
  selector: 'app-cookie-demo-host',
  templateUrl: './cookie-demo-host.component.html',
  styleUrls: ['./cookie-demo-host.component.scss']
})
export class CookieDemoHostComponent implements OnInit {
  cookieValue: string = '';
  allCookies: Cookie[] = [];

  ngOnInit() {
    this.updateAllCookies();
  }

  onInputChange(event: Event) {
    this.cookieValue = (event.target as HTMLInputElement).value;
  }

  saveCookie() {
    if (this.cookieValue) {
      const cookieName = `hostCookie_${Date.now()}`;
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      document.cookie = `${cookieName}=${this.cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
      this.cookieValue = '';
      this.updateAllCookies();
    }
  }

  deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    this.updateAllCookies();
  }

  updateAllCookies() {
    const allCookiesString = document.cookie;
    this.allCookies = allCookiesString.split(';')
      .map(cookie => cookie.trim())
      .filter(cookie => cookie !== '')
      .map(cookie => {
        const [name, ...valueParts] = cookie.split('=');
        const value = valueParts.join('=');
        return { name: name.trim(), value: value.trim() };
      });
  }
}

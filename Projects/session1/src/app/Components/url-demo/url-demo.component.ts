import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-url-demo',
  templateUrl: './url-demo.component.html',
  styleUrls: ['./url-demo.component.scss']
})
export class UrlDemoComponent implements OnInit {
  inputValue: string = '';
  tempInputValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('[UrlDemoComponent] Constructor called');
  }

  ngOnInit() {
    console.log('[UrlDemoComponent] ngOnInit called');
    this.route.queryParams.subscribe(params => {
      console.log('[UrlDemoComponent] Query params received:', params);
      this.inputValue = params['param'] || '';
      this.tempInputValue = this.inputValue;
      console.log('[UrlDemoComponent] inputValue set to:', this.inputValue);
    });
  }

  updateTempValue(value: string) {
    console.log('[UrlDemoComponent] updateTempValue called with value:', value);
    this.tempInputValue = value;
  }

  saveUrlParam() {
    console.log('[UrlDemoComponent] saveUrlParam called with value:', this.tempInputValue);
    this.inputValue = this.tempInputValue;
    this.router.navigate(['/session2/url-catch'], {
      queryParams: { param: this.inputValue }
    }).then(() => {
      console.log('[UrlDemoComponent] Navigated to Session2 with URL parameter');
    }).catch(error => {
      console.error('[UrlDemoComponent] Error navigating to Session2:', error);
    });
  }
}  

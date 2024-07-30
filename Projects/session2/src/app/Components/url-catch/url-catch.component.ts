import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-catch',
  templateUrl: './url-catch.component.html',
  styleUrls: ['./url-catch.component.scss']
})
export class UrlCatchComponent implements OnInit {
  caughtParam: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.caughtParam = params['param'] || 'No parameter caught';
      console.log('[UrlCatchComponent] Caught parameter:', this.caughtParam);
    });
  }
}

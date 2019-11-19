import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li role="presentation" routerLinkActive="active"><a routerLink="/home">Home</a></li>
            <li role="presentation" routerLinkActive="active"><a routerLink="/network">Network</a></li>
            <li role="presentation" routerLinkActive="active"><a routerLink="/timeline">Timeline</a></li>
          </ul>
        </nav>
        <h3 class="text-muted">ngx-vis - an Angular vis.js wrapper</h3>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DemoComponent { }

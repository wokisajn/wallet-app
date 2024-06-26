import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'wallet16-app';

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/summary', label: 'Summary' },
    { path: '/news', label: 'News' }
  ];
}

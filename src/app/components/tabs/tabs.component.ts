import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/summary', label: 'Summary' },
    { path: '/news', label: 'News' }
  ];
}

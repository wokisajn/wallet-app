import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [
    TabsComponent
  ]
})

export class ComponentsModule { }

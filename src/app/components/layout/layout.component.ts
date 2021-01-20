import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'List',
      icon: 'pi pi-list',
      routerLink: '/list'
    },
    {
      label: 'History',
      icon: 'pi pi-clock',
      routerLink: '/history'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeView(route:string): void {
    this.router.navigate([ `${route}` ])
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    this.router.navigate([ 'login' ])
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sideItems } from './side-items';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{
 public sideItemsData = inject(sideItems).get()
  public router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    
  }
  
 clickSideNav(items: any) {
  if(items.hasQuery && items.hasQuery == true) {
    const queryParams = { page: 1, limit: 20 };
    this.router.navigate([items.url], { queryParams })
  } else {
    this.router.navigate([items.url])
  }
  console.log(this.router.url.includes('home')? true : false)
 }

 classActive() {
  this.router.url.includes('home')? true : false
 }
}
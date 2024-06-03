import { Component } from '@angular/core';
import { NavigationStart, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  showNav: boolean = false;

  constructor(private router:Router){
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        this.showNav = event.url !== '/login' && event.url !== '/register';
      }
    })
  }
}

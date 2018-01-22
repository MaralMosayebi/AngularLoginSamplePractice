import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    .fill-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();
  }

}
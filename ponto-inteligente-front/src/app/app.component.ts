import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  sair() {
  	delete localStorage['token'];
  	this.router.navigate(['/']);
  }

  autenticado(): boolean {
    return localStorage['token'];
  }
}

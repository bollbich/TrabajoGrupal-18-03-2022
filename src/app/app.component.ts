import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrabajoGrupal-18-03-2022';

  constructor(private primeConfig:PrimeNGConfig){

  }
  ngOnInit(): void {
    this.primeConfig.ripple = true;
  }
}

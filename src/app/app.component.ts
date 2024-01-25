import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HEADERComponent } from './COMPONENTES/header/header.component';
import { BODYComponent } from './COMPONENTES/body/body.component';
import { BODY2Component } from './COMPONENTES/body2/body2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HEADERComponent, BODYComponent, BODY2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina_web';
}

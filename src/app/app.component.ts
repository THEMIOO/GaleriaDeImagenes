import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Galeria De Imagenes';

  imagenes: string[] = [];

  constructor() {
    this.cargarImagenes();
  }

  cargarImagenes() {
    const totalImagenes = 12;
    for (let i = 1; i <= totalImagenes; i++) {
      this.imagenes.push(`assets/imgs/img${i}.jpg`);
    }
  }
}



import { HeaderService } from './../../services/header.service';
import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  HeaderService = inject(HeaderService);
  claseAplicada = signal('');
  tituloMostrado = signal('');

  esconderTitulo = effect(
    () => {
      if (this.HeaderService.titulo()) {
        this.claseAplicada.set('fade-out');
      }
    },
    { allowSignalWrites: true }
  );

  mostrarTituloNuevo(e: AnimationEvent) {
    if (e.animationName.includes('fade-out')) {
      this.tituloMostrado.set(this.HeaderService.titulo());
      this.claseAplicada.set('fade-in');
      setTimeout(() => this.claseAplicada.set(''), 250);
    }
  }
  /*
  constructor() {
    this.tituloMostrado.set(this.HeaderService.titulo());
  }
  */
}

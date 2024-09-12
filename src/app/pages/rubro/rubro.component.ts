import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/interfaces/productos';
import { CategoriasService } from '../../core/services/categorias.service';
import { TarjetaProductoComponent } from '../../core/components/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-rubro',
  standalone: true,
  imports: [RouterModule, CommonModule, TarjetaProductoComponent],
  templateUrl: './rubro.component.html',
  styleUrl: './rubro.component.scss',
})
export class RubroComponent {
  headerService = inject(HeaderService);
  categoriasService = inject(CategoriasService);
  ac = inject(ActivatedRoute);
  productos: WritableSignal<Producto[]> = signal([]);

  ngOnInit(): void {
    this.ac.params.subscribe((params) => {
      if (params['id']) {
        this.categoriasService
          .getById(parseInt(params['id']))
          .then((categoria) => {
            if (categoria) {
              this.productos.set(categoria.productos);
              this.headerService.titulo.set(categoria.nombre);
            }
          });
      }
    });
  }
}

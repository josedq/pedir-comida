import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';
import { Producto } from '../../core/interfaces/productos';
import { ProductosService } from '../../core/services/productos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Busqueda } from '../../core/interfaces/busqueda';
import { TarjetaProductoComponent } from '../../core/components/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, TarjetaProductoComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss',
})
export class BuscarComponent {
  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  productos: WritableSignal<Producto[]> = signal([]);

  ngOnInit(): void {
    this.headerService.titulo.set('Buscar');
    this.productosService.getAll().then((res) => this.productos.set(res));
  }

  parametrosBusqueda: Busqueda = {
    texto: '',
    aptoCeliaco: false,
    aptoVegano: false,
  };

  async buscar() {
    this.productos.set(
      await this.productosService.buscar(this.parametrosBusqueda)
    );
  }
}

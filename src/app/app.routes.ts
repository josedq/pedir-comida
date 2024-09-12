import { Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { RubroComponent } from './pages/rubro/rubro.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: 'categoria/:id',
    component: RubroComponent,
  },
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'articulo/:id',
    component: ArticuloComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
];

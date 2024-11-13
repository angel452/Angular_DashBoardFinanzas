import { Injectable } from '@angular/core';
import { Ingresos } from './ingresos.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  ingresos : Ingresos[] = [
    new Ingresos('Salario', 4000),
    new Ingresos('Venta de coche', 500)
  ];

  eliminar( ingreso : Ingresos ){
    const index : number = this.ingresos.indexOf( ingreso );
    this.ingresos.splice( index, 1 );
  }
}

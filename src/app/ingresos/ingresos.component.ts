import { Component } from '@angular/core';
import { Ingresos } from './ingresos.model';
import { IngresosService } from './ingresos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  ingresos : Ingresos[] = [];

  constructor( private ingresosService : IngresosService ){
    this.ingresos = this.ingresosService.ingresos;
  } 

  eliminarIngreso( ingreso : Ingresos ){
    this.ingresosService.eliminar( ingreso );
  }
}

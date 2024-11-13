import { Component, Input } from '@angular/core';
import { Egresos } from './egresos.model';
import { EgresosService } from './egresos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {
  egresos : Egresos[] = []
  @Input() ingresoTotal! : number;

  constructor(private egresosService : EgresosService){
    this.egresos = this.egresosService.egresos;
  }

  eliminarEgreso( egreso : Egresos ){
    this.egresosService.eliminar(egreso);
  }


  calcularPorcentaje(egreso : Egresos){
    return egreso.valor / this.ingresoTotal;
  }
}

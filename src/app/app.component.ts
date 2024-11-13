import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { IngresosComponent } from "./ingresos/ingresos.component";
import { EgresosComponent } from "./egresos/egresos.component";
import { Ingresos } from './ingresos/ingresos.model';
import { Egresos } from './egresos/egresos.model';
import { IngresosService } from './ingresos/ingresos.service';
import { EgresosService } from './egresos/egresos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, FormularioComponent, IngresosComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  ingresos : Ingresos[] = [];
  egresos : Egresos[] = [];

  constructor(
    private ingresosService : IngresosService,
    private egresosService : EgresosService
  ){
    this.ingresos = this.ingresosService.ingresos;
    this.egresos = this.egresosService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal : number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal : number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });

    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}

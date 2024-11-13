import { Ingresos } from './../ingresos/ingresos.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresosService } from '../ingresos/ingresos.service';
import { EgresosService } from '../egresos/egresos.service';
import { Egresos } from '../egresos/egresos.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo: string = "ingresoOperacion";
  descripcionInput : string | null = null;
  valorInput : number | null = null;

  constructor(
    private ingresoServicio : IngresosService,
    private egresoServicio : EgresosService
  ){}

  tipoOperacion(evento : Event){
    const target = evento.target as HTMLInputElement;
    this.tipo = target.value;
  }

  agregarOperacion(){
    if(this.descripcionInput != null && this.valorInput != null){
      if(this.tipo == "ingresoOperacion"){
        this.ingresoServicio.ingresos.push(
          new Ingresos(this.descripcionInput, this.valorInput)
        );
      }
      else{
        this.egresoServicio.egresos.push(
          new Egresos(this.descripcionInput, this.valorInput)
        );
      }
    }
    else{
      alert("Por favor, llene los campos de descripción y valor");
    }

    // Limpiar campos
    this.descripcionInput = null;
    this.valorInput = null;
  }
}

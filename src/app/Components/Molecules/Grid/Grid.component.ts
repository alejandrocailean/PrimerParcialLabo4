import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  @Input() listado:any;
  @Input() titulo:string;


  h_menu:boolean;
  indice;
  modificar={
    name:'',
    capital:'',
    region:'',
    subregion:'',
    languages:''
  };
  
  constructor(private datos: DataService) { }

  ngOnInit(): void {
    this.h_menu=true; 
  }  

  modificacion(i){
    console.log(this.listado[ i]);
    this.h_menu=false;
    this.indice=i;  
    this.modificar=this.listado[this.indice];    
  }

  detalle(seleccionado:string){
    // this.datos.redirecciona('/detalle','elegido',seleccionado);

  }

  guardar(){
    this.listado.splice(this.indice,1,this.modificar);
    this.h_menu=true;
  }

}



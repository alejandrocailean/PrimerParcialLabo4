import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/Data.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  datosAPI;
  h_spinner:boolean;

  constructor(private datos:DataService) {
    this.h_spinner=false;
   }

  ngOnInit(): void {
   this.datos.getDatos('https://restcountries.eu/rest/v2/all')
   .subscribe((data)=>{
     this.datosAPI=data;
     this.datosAPI.sort( (a, b)=>b.region - a.region);
   });
   this.h_spinner=true;
   
  }

}

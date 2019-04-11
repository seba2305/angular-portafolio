import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: InfoEquipo[] = [];
  // equipo: any[] = [];
  cargada = false;

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();



  }

  private cargarInfo(){
    //Leer archivo json
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
      });
  }

  private cargarEquipo(){
    //Leer archivo json
    this.http.get('https://portafolio-angular-d929a.firebaseio.com/equipo.json')
      // .subscribe( (resp: any[]) => {
      .subscribe( (resp: InfoEquipo[]) => {
          this.cargada = true;
          this.equipo = resp;
          // console.log(resp);
      });
  }
}
// 
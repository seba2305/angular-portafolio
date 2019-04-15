import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';
import { ProductoDetalle } from '../../interfaces/producto_detalle.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto_detalle: ProductoDetalle;
  id: string;

  constructor( private route: ActivatedRoute, 
               public productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id']);

        this.productoService.getProducto(parametros['id'])
            .subscribe( ( producto: ProductoDetalle ) =>{
              this.id = parametros['id'];
              this.producto_detalle = producto;
            });
      });

  }

}

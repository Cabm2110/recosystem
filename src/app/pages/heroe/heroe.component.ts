import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { empty, Observable } from 'rxjs';

import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { idFirebase } from '../../models/busqueda.model';
import { BusquedaComponent } from '../busqueda/busqueda.component';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();


  constructor( private heroesService: HeroesService,
               private route: ActivatedRoute ) {}

  ngOnInit() {

    let bandera = false;
    const codigo : any = this.route.snapshot.paramMap.get('id');
    console.log(codigo);

    this.heroesService.getIdFirebase( codigo )
    .subscribe( (resp: any) => {

      if(Object.keys(resp).length === 0){
          Swal.fire({
            title: 'Error!',
            text: 'No se encontraron registros',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          }).then(function(result) {
            window.location.href = "busqueda";
          });
      }
      
        Object.keys( resp ).forEach( key => {
        const heroe: HeroeModel = resp[key];
        heroe.id = key;
        console.log(heroe.id);
        

        this.heroesService.getDevoto(heroe.id).subscribe((resp: any) =>{
        this.heroe = resp;
        this.heroe.id = heroe.id;
        
        
         });
       });
    });
 

    // const id : any = this.route.snapshot.paramMap.get('id');

    // if ( id !== 'nuevo' ) {

    //   this.heroesService.getHeroe( id )
    //     .subscribe( (resp: HeroeModel) => {
    //       this.heroe = resp;
    //       this.heroe.DPI = id;
    //     });

    // }

   




  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();


    let peticion: Observable<any>;
    console.log(this.heroe);

    if ( this.heroe.id ) {
      peticion = this.heroesService.actualizarHeroe( this.heroe );
    } else {
      peticion = this.heroesService.crearHeroe( this.heroe );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.heroe.NOMBRE,
        text: 'Se actualizó correctamente',
      }).then(function (result) {
        window.location.href = "busqueda";
      });

    });



  }

  buscarDPI( form: NgForm){

     const id : any = this.route.snapshot.paramMap.get('id');
     console.log(id);

    if ( id === '2381918690101' ) {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }



      
  }

}

import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;


  constructor( private heroesService: HeroesService ) { }

  ngOnInit() {

    this.cargando = true;
    this.heroesService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
        this.cargando = false;
      });
      console.log(this.heroes);
  }

  borrarHeroe( heroe: HeroeModel, i: number ) {

    // Swal.fire({
    //   title: '¿Está seguro?',
    //   text: `Está seguro que desea borrar a ${ heroe.nombre }`,
    //   type: 'question',
    //   showConfirmButton: true,
    //   showCancelButton: true
    // }).then( resp => {

    //   if ( resp.value ) {
    //     this.heroes.splice(i, 1);
    //     this.heroesService.borrarHeroe( heroe.id ).subscribe();
    //   }

    // });
    
  }

}

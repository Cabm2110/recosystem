import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { DevotoComponent } from '../devoto/devoto.component';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @Input()
  codigo : string = "";

  constructor(private heroesService: HeroesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

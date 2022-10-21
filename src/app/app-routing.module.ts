import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { DevotoComponent } from './pages/devoto/devoto.component';

const routes: Routes = [

  {path: 'busqueda', component: BusquedaComponent},
  {path: 'heroes', component: HeroesComponent},
  // {path: 'heroe/:id', component: HeroeComponent},
  {path: 'devoto/:id', component: DevotoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'busqueda'}
];

@NgModule({
  
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

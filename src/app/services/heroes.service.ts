import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://recosystem-20f1a-default-rtdb.firebaseio.com/Devotos/-NEvnrSUBFWBYUVwgjmX';


  constructor( private http: HttpClient ) { }


  crearHeroe( heroe: HeroeModel ) {

    return this.http.post(`${ this.url }.json`, heroe)
            .pipe(
              map( (resp: any) => {
                heroe.id = resp.id;
                return heroe;
              })
            );

  }

  actualizarHeroe( heroe: HeroeModel ) {

    const heroeTemp = {
      ...heroe
    };

    // delete heroeTemp.id;
    console.log(heroe.id);

    return this.http.put(`${ this.url }/${ heroe.id }.json`, heroeTemp);


  }

  // borrarHeroe( id: string ) {

  //   return this.http.delete(`${ this.url }/Devotos/-NEruMpg5MC-pGdr1vZf/${ id }.json`);

  // }



  getDevoto( id: string ) {
    
    let url = `${ this.url }/${ id }.json`;
    return this.http.get( url);

  }

  getIdFirebase( codigo: string ) {

    let orderBy = "CODIGO";

    let queryParams = new HttpParams();
    
    queryParams = queryParams.append("orderBy", `"${orderBy}"` );
    queryParams = queryParams.append("equalTo", `"${codigo}"` );
    
    // console.log(queryParams);


    let urlFinal = `${this.url}.json?` + queryParams;

    console.log(urlFinal);

    return this.http.get(`${this.url}.json`, {params: queryParams});

  }




  getHeroes() {
    return this.http.get(`${ this.url }.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( heroesObj: any ) {

    const heroes: HeroeModel[] = [];

    if (heroesObj === null) { return []; }

    Object.keys( heroesObj ).forEach( key => {

     const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });

    console.log(heroes);
    return heroes;

  }


}

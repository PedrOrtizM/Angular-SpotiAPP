import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = "Bearer BQCl_5CAN9aLEoLJT1UZ60xmsXZeEWGTyAXdk-9OMQupSuVzUEenUoJ1TrIDuklGOk5CPVvZ42ZsSButb2c";

  constructor( private http:Http) {

   }

  getArtistas( termino:string){

    let headers  = new Headers();
    headers.append('authorization',this.token);

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query

     return this.http.get(url, {headers}).subscribe(
       res =>{
         this.artistas = res.json().artists.items;
         //  console.log(this.artistas);
         console.log(res.json().artists.items);
         //return res.json().artists.items;
       }
     );

  }

  getTop( id:string){

    let headers  = new Headers();
    headers.append('authorization',this.token);

    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query



    return this.http.get(url, {headers}).subscribe(
      res =>{
        this.artistas = res.json();
        console.log(res.json());
      }

    );

  }

  getArtista( id:string){

    let headers  = new Headers();
    headers.append('authorization',this.token);

    let query = `/${id}`;
    let url = this.urlArtista + query

     return this.http.get(url, {headers}).subscribe(
      res => {
           console.log(res.json());
           return res.json();

      }
    )


  }

}

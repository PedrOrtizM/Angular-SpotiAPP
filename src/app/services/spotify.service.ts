import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SpotifyService {


  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = "Bearer BQA5JYzlzdtSjMZDv3C9Eq7ExjNN3UWftmqUy_aXnI-9Xew_2kQpiXLnu0zzMT56MtNUvRjT1SGTnGfA3ps";

  constructor( private http:HttpClient) {

   }

  getArtistas( termino:string){
    const headers = new HttpHeaders().set("authorization", this.token);

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query

     this.http.get(url , {headers}).subscribe(
       data => {
                console.log("PUT ARTISTAS Request is successful ", data);

                return data;
            },
            error => {
                console.log("Error", error);
     });


  }

  getTop( id:string){

    const headers = new HttpHeaders().set("authorization", this.token);

    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query



    return this.http.get(url, {headers}).subscribe(
      data => {
               console.log("PUT Request is successful ", data);
               return data;
           },
           error => {
               console.log("Error", error);
             }
    );

  }

  getArtista( id:string){

  const headers = new HttpHeaders().set("authorization", this.token);

    let query = `/${id}`;
    let url = this.urlArtista + query

     return this.http.get(url, {headers}).subscribe(
       data => {
                console.log("PUT Request is successful ", data);
                return data;
            },
            error => {
                console.log("Error", error);
              }
    )


  }

}

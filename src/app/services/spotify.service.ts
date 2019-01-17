import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
// Cuando se define un injectable de esta manera se necesario importarlo en app.module
@Injectable()

export class SpotifyService {



  token:string = "Bearer BQDdcmGBb-Q8UOW6PuFHOGsv8ik20j_TAfUk9Ggl4FVHh1gVW2DnwcoPw0T9OC7K_VxD46oXOPSiivz2myo";

  constructor( private http:HttpClient) {

   }

   getQuery(query:string){

     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders().set("authorization", this.token);

     return this.http.get(url , {headers});
   }

  getArtistas( termino:string){
   // pipe y map para fultrr la filtrar la información que viene
   // para que no salga error se pone entre [''] el atributo que viene de data
    return this.getQuery(`search?q=${termino}&type=artist`).pipe( map( data =>{
      return data['artists'].items;
    }));

  }

  getArtista( id:string){

  // const headers2 = new HttpHeaders({
  //   'authorization': this.token
  // });

  return  this.getQuery( `artists/${id}`);



  }

  getTop( id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe( map( data =>{
      return data['tracks'];
    }));

  }
}

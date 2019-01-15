import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
// Cuando se define un injectable de esta manera se necesario importarlo en app.module
@Injectable()

export class SpotifyService {



  token:string = "Bearer BQAVZQXfhNu90Vkkdpq48cN2YSKIOovKMvQbMFxmu40e4YrLfN2lkpttyVfecDgkUpYk6dzyRVmnlIvGobA";

  constructor( private http:HttpClient) {

   }

   getQuery(query:string){

     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders().set("authorization", this.token);

     return this.http.get(url , {headers});
   }

  getArtistas( termino:string){

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
    return this.getQuery(`artists/${id}/top-tracks?country=US`);

  }
}

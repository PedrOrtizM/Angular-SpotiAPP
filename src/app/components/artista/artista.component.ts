import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any;
  pistas:any;

  constructor(private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) {
    this.activatedRoute.params.subscribe(
    parametros => {
      this.getArtista( parametros.id );
      this.getTop(parametros.id);

    });
   }


getArtista(id:string){
  this._spotifyService.getArtista(id) .subscribe( data =>{
       this.artista = data
     });

}

getTop(id:string){
  this._spotifyService.getTop(id).subscribe(data=>{
  this.pistas = data;
  console.log(this.pistas);
  });
}




}

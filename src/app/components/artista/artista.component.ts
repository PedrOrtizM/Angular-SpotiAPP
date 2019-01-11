import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista :any;
  pistas:any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit() {


      this.activatedRoute.params.subscribe(
      parametros => {
       console.log("NUMERO DE ID",parametros.id);
        this._spotifyService.getArtista(parametros.id)
       .subscribe( data =>{
         this.artista = data

       });
       this._spotifyService.getTop(parametros.id).subscribe(data=>{
         console.log(data)
       })


    });


  }

}

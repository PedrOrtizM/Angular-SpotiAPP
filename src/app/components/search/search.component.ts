import { Component } from '@angular/core';
import {SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {


 termino:string = "";
 artistas:any[] =[]
 loading:boolean;
  constructor(private spotifyService: SpotifyService) {

   }


  buscarArtista(){
    this.loading = true;

    this.spotifyService.getArtistas(this.termino).subscribe(
              (data:any) => {
                        this.artistas = data;
                        this.loading = false;
            })
  }
}

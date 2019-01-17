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
 error:boolean;
 mensaje:string;
  constructor(private spotifyService: SpotifyService) {
      this.error = false;
   }


  buscarArtista(){
    this.loading = true;
    this.error = false;
    this.spotifyService.getArtistas(this.termino).subscribe(
              (data:any) => {
                              this.artistas = data;
                              this.loading = false;
                            },
              (dataError) =>{
                          this.error = true;
                          this.mensaje = dataError.error.error.message;
                          // console.log(dataError.error.error.message)
              })
  }
}

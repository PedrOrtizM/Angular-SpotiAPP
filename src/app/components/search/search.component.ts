import { Component, OnInit } from '@angular/core';
import {SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


 termino:string = "";
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {

  }

  buscarArtista(){
    // console.log(this.spotifyService.getArtistas(this.termino));
  
    this.spotifyService.getArtistas(this.termino);
  }
}

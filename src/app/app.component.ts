import { HobbyService } from './hobby.service' ;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'AlfalahAnugara';
  alamat = 'Simpang Semanggi Timur No 2'

  tanggal = Date.now

  Hobb: any[];
  constructor(private hobbyServ:HobbyService){}

  ngOnInit(){
    this.Hobb = this.hobbyServ.getAlfalah() ;
  }
    
  }


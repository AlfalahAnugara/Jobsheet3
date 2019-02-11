import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }
  getAlfalah() {
    return [
      {id:1 , hobby: "Bermain Game" , ket:"Pada malam hari"},

      {id:2 , hobby: "Menonton Film" , ket:"Pada Waktu senggang"} ,
      {id:3 , hobby: "Membaca Komik" , ket:"Pada sore"}
    ]
  }
}

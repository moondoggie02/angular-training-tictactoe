import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const gameKey = "key=fredId";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardUrl = 'http://localhost:8080/tictactoe/';

  constructor(
    private http: HttpClient
  ) { }

  createGame(): Observable<string> {
    const url = `${this.boardUrl}createGame?${gameKey}`;
    return this.http.get<string>(url);
  }

}

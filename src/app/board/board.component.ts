import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['../reset.css',
              './board.component.css']
})
export class BoardComponent implements OnInit {
  response: string = '';

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit() {
  }

  play(): void {
    this.boardService.createGame().subscribe(
      response => this.response = response);
  }

}

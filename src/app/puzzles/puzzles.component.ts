import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.scss']
})
export class PuzzlesComponent implements OnInit {

  show: boolean = true;
  public cardOneIsCorrect: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = false;
  }
}

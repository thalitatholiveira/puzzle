import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-puzzle-card',
  templateUrl: './puzzle-card.component.html',
  styleUrls: ['./puzzle-card.component.scss']
})
export class PuzzleCardComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = 'O que é, o que é...';
  @Input() description: string = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

  constructor() { }

  ngOnInit(): void {
  }

}

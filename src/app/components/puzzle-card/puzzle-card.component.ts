import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-puzzle-card',
  templateUrl: './puzzle-card.component.html',
  styleUrls: ['./puzzle-card.component.scss']
})
export class PuzzleCardComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = 'O que é, o que é...';
  @Input() description: string = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
  @Input() rightAnswer: string = '';

  @Output() isCorrect: EventEmitter<boolean> = new EventEmitter();

  public userAnswer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    const isEqual = this.userAnswer.toLowerCase() == this.rightAnswer.toLowerCase();
    console.log('rightAnswer '+ this.rightAnswer);
    console.log('isEqual '+ isEqual);
    console.log('userAnswer '+ this.userAnswer);
    this.isCorrect.emit(isEqual);
  }
}

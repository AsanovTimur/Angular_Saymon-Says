import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.scss']
})
export class GameButtonComponent implements OnInit {
  @Input() color: string;
  @Input() active: boolean;
  @Output() guess: EventEmitter<string> = new EventEmitter<string>();
  @Input() musicId: any;

  constructor() { }

  ngOnInit(): void {
    }

  onClickBtn(): void {
    this.guess.emit(this.color);
  }
}

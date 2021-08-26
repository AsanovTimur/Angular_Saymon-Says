import { Component, OnInit } from '@angular/core';
import {GameStateService} from '../../services/game-state.service';
import {sleep} from '../../models/constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  counter: any;
  count: number;
  valueStart = 'start';
  colors: any = {
    red: false,
    blue: false,
    green: false,
    yellow: false
  };
  sounds: any = {
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  };

  constructor(private game: GameStateService) { }
  ngOnInit(): void {
    this.game.state.subscribe(state => {
      console.log(state);
      if (this.count !== state.count) {
        this.counter = 'Score: ' + state.counter;
        this.count = state.count;
        setTimeout(() => {
          this.teasePlayer(state.simon);
        }, 500);
      }
    });
  }

  playerGuess(e: string): void {
    this.game.playerGuess(e);
  }

  // tslint:disable-next-line:typedef
  async teasePlayer(simon: string[]) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < simon.length; i++) {
      this.colors[simon[i]] = true;
      this.sounds[simon[i]].play();
      await sleep(500);
      this.colors[simon[i]] = false;
      await sleep(200);
    }
  }


  onStart(): void {
    if (this.valueStart === 'start') {
      this.valueStart = 'restart';
      this.game.generateSimon();
    } else {
      this.game.restartSimon();
    }
  }

  redSuond(): void {
    this.sounds.red.play();
  }

  greenSuond(): void {
    this.sounds.green.play();
  }

  blueSuond(): void {
    this.sounds.blue.play();
  }

  yellowSuond(): void {
    this.sounds.yellow.play();
  }
}

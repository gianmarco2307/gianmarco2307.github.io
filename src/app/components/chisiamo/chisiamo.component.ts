import { Component } from '@angular/core';

@Component({
  selector: 'app-chisiamo',
  templateUrl: './chisiamo.component.html',
  styleUrls: ['./chisiamo.component.css']
})
export class ChisiamoComponent {
  openEasterEgg() {
    window.open("https://github.com/chiaraferrara","_blank");
  }

}

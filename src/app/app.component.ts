import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggled: boolean = true;

  handleClick() {
    this.toggled = !this.toggled;
  }
}

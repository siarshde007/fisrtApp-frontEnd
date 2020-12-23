import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngularApp';
  greeting: string = 'Hello from java full stack'

  getGreeting() {
    return 'My name is Arshdeep Singh'
  }
}

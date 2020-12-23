import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from '../joke/joke.component';



@NgModule({
  declarations: [JokeComponent],
  imports: [
    CommonModule
  ]
})
export class JokesModule { }

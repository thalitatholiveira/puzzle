import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsComponent } from './components/components.component';
import { PuzzleCardComponent } from './components/puzzle-card/puzzle-card.component';
import { PuzzlePlaceholderComponent } from './components/puzzle-placeholder/puzzle-placeholder.component';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    PuzzleCardComponent,
    PuzzlePlaceholderComponent,
    PuzzlesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

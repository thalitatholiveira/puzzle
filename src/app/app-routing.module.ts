import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuzzlesComponent } from './puzzles/puzzles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'puzzles', component: PuzzlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

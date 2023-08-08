import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '',   redirectTo: '/quiz', pathMatch: 'full' },
  { path : 'quiz', component: QuizComponent},
  { path : 'results', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

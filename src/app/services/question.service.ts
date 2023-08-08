import { Injectable } from '@angular/core';
import { OpenTdbService } from './open-tdb.service';
import { Question, Questions } from '../models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionnaire : Question[] = [];

  nbCorrectAnswers : number = 0;
  
  constructor(private openTdbService: OpenTdbService) { }

  public createQuiz(amount: number, category: number, difficulty:string, type:string): void {
    const observableQuestions$ = this.openTdbService.getQuestions(amount, category, difficulty, type);
    this.openTdbService.getQuestions(amount, category, difficulty, type).subscribe(response => {
      if(response !== null && response.response_code === 0) {
        this.questionnaire = response.results;
        this.questionnaire.forEach(question => {
          question = this.createAnswersList(question);
        });
      } else {
        this.questionnaire = [];
      }

    });
  }

  private createAnswersList(question:Question) : Question {
    const randomNumber = Math.floor(Math.random() * (question.incorrect_answers.length + 1));
    question.mixed_answers = [...question.incorrect_answers];
    question.mixed_answers.splice(randomNumber, 0, question.correct_answer);
    return question;
  }

  public isQuestionnaireCompleted() : boolean {
    let isCompleted: boolean = true;
    this.questionnaire.forEach(question => {
        if(!question.answerSelected) {
          isCompleted = false;
        }
    });
    return isCompleted;
  }

  public calculResults() : void {
    this.nbCorrectAnswers = this.questionnaire.filter(question => question.answerSelected === question.correct_answer).length;
  }

  public reset() : void {
    this.nbCorrectAnswers = 0;
    this.questionnaire = [];
  }
}

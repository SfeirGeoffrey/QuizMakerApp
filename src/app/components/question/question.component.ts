import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input() question: Question;

  @Input() displayResult: boolean;

  buttonColor : string = "green";
  
  constructor(public questionService: QuestionService) {
  }

  selectAnswer(answerSelected: string) {
    this.question.answerSelected = answerSelected;
  }
  
  determineBackgroundColor(answer : string) : string{
    if (!this.displayResult) {
      if(this.question.answerSelected === answer) {
        return 'answer-selected';
      }
    } else {
      if(this.question.answerSelected === answer && answer !== this.question.correct_answer) {
        return 'wrong-answer';
      } else if (answer === this.question.correct_answer) {
        return 'good-answer';
      }
    }
    return'';
  }
}

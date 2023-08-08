import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{

  constructor(public questionService: QuestionService, private router : Router) {
  }

  ngOnInit(): void {
    this.questionService.calculResults();
  }

  createNewQuiz() : void {
    this.questionService.reset();
    this.router.navigate(['/quiz']);
  }
}

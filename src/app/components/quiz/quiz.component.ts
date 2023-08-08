import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Categories, Category } from 'src/app/models/category.model';
import { Difficulty } from 'src/app/models/difficulty.model';
import { OpenTdbService } from 'src/app/services/open-tdb.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

  colorCreateButtonColor : string = "grey";
  categories: Category[] = [];
  difficulties : Difficulty[] = [];

  categorySelected : number | null = null;
  difficultySelected : string | null = null;

  private categoriesObserver$ : Observable<Categories | null> = this.openTdbService.getCategories();
  private subscription:Subscription;

  constructor(private openTdbService: OpenTdbService, public questionService: QuestionService) {
  }

  ngOnInit(): void {
    
    this.subscription = this.categoriesObserver$.subscribe(response => {
      if(response !== null) {
        this.categories = response.trivia_categories;
      } else {
        this.categories = [];
      }
      
    });
    this.difficulties = [
      new Difficulty("Easy", "easy"), 
      new Difficulty("Medium", "medium"), 
      new Difficulty("Hard", "hard")
    ];
  }

  createQuiz(): void {
    if(this.categorySelected !== null && this.difficultySelected !== null) {
      this.questionService.createQuiz(5, this.categorySelected, this.difficultySelected, "multiple");
    } else {
      console.error("Please choose a category and a difficulty.");
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

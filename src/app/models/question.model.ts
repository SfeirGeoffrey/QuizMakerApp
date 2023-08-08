export class Questions {
    constructor(public response_code: number, public results: Question[]){ 
        this.response_code = response_code;
        this.results = results;     
    }
}

export class Question {
    constructor(public category: string,public difficulty: string,public type: string,public question: string,
                public correct_answer: string,public incorrect_answers: string[],public mixed_answers?: string[],public answerSelected?: string){ 
        this.category = category;
        this.difficulty = difficulty;
        this.type = type;
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
        this.mixed_answers = mixed_answers;
        this.answerSelected = answerSelected;
    }
}
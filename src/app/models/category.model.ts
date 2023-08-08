export class Categories {
    constructor(public trivia_categories: Category[]){ 
        this.trivia_categories = trivia_categories;         
    }
}

export class Category {
    constructor(public id: number, public name: string){  
        this.id = id;  
        this.name = name;  
    }
}
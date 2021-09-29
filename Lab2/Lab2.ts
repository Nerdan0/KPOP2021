enum Category {Analyst = "Business analyst", Developer ="Developer",Designer = "Designer",QA = "QA",Scrum = "Scrum master"}


interface PrizeLogger
{
    (str:string):void; 
}

function prizeReal(str:string) {
    console.log(str)
}

interface Workers{
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:Category;
    markPrize:PrizeLogger;
}

function getAllworkers() 
{
    let workers:Workers[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst, markPrize:prizeReal},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst, markPrize:prizeReal},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum, markPrize:prizeReal},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, markPrize:prizeReal}
    ]
    return workers;
}
 

function getWorkerByID (id:number)
{

    return getAllworkers().find(el => el.id==id)

}

function printWorker(worker:Workers)
{

    console.log(`${worker.Name} ${worker.surname}, ${worker.salary}`)

}

let logPrize:PrizeLogger= prizeReal;
console.log(logPrize("kpop"));


interface Person
{

    name:string;
    email:string;

}

interface Author extends Person
{

    numBooksPublished:number;

}

interface Librarian extends Person
{

    department:string;
    assistCustomer(custName:string):void;

}

let favoriteAuthor:Author = {name:"Nill", email:"kiggers@kk.klan", numBooksPublished:8441}

/*let favoriteLibrarian:Librarian = {name:"Nate", email:"higgers@waffen.ss", department:"Totenkopf", assistCustomer:function tmp(name:string) {
    console.log("alhamdulillah "+name);
}}*/ //комментирование по заданию В)

class UniversityLibrarian implements Librarian
{

    name:string;
    email:string;
    department:string;

    assistCustomer(custName:string):void
    {
        
        console.log(`${this.name} is assisting ${custName}`);

    }

}

let favoriteLibrarian:Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Baldick";
favoriteLibrarian.assistCustomer("M@k$$im")

abstract class ReferenceItem{

    /*title:string;
    year:number;

    constructor(newTitle:string, newYear:number)
    {
        this.title = newTitle;
        this.year=newYear;
        console.log("Creating new ReferenceItem....")

    }*/

    private __publisher:string;
    static department:string = "Tzahal";

    publisherGetter():string
    {

        return this.__publisher.toUpperCase();

    }

    publisherSetter(newPublisher:string):void
    {

        this.__publisher = newPublisher;

    }


    constructor(public title:string, protected year:number){}

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }

    abstract printCitation():void;

}

class Encyclopedia extends ReferenceItem{

    constructor(title:string, year:number, public edition:number)
    {
        super(title, year);
    }

    printItem() {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition:${this.edition}`);
    }

    printCitation(){

        console.log("title - year");

    }
}

/*let ref = new ReferenceItem("1984", 1984);
ref.publisherSetter("solidjays");
ref.printItem();
console.log(ref.publisherGetter());*/

let refBook = new Encyclopedia("Kabanchik raspravil plechi", 109, 1);
refBook.printItem();



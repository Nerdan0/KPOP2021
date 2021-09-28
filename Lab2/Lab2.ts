enum Category {Analyst = "Business analyst", Developer ="Developer",Designer = "Designer",QA = "QA",Scrum = "Scrum master"}

interface Workers{
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:Category;
    markPrize:PrizeLogger;
}

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

let favoriteLibrarian:Librarian = {name:"Nate", email:"higgers@waffen.ss", department:"Totenkopf", assistCustomer:function tmp(name:string) {
    console.log("alhamdulillah");
}}

interface PrizeLogger
{
    (str:string):void; 
}

function prizeReal(str:string) {
    console.log(str)
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

console.log(printWorker(getAllworkers()[1]));
console.log(getAllworkers()[1].markPrize("123"));
console.log(getWorkerByID(3).Name);
console.log(logPrize("kpop"));
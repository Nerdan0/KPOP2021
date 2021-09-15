enum Category {Analyst = "Business analyst", Developer ="Developer",Designer = "Designer",QA = "QA",Scrum = "Scrum master"}


function getAllworkers() 
{
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}
    ]
    return workers;
}
   
function logFirstAvailable(workers:any[] = getAllworkers()):void
{
    //let workersNum:Number = workers.length
    console.log(workers.length)

    for(var worker of workers){

        if(worker.available)
        {
            console.log(worker.Name+` `+worker.surname);
        }        

    }

}

function getWorkersNamesByCategory(cat:Category = Category.Designer)
{

    let workers:Array<string> =[];

    for(var worker of getAllworkers()){

        if(worker.category == cat)
        {
            workers.push(worker.Name+` `+worker.surname);
        }        

    }

    return workers;

}

function logWorkersNames(workers:string[]):void
{

    console.log(workers)

}

function getWorkerByID (id:number)
{

    let worker:any[] = [];

    worker.push(getAllworkers().find(el => el.id==id).Name)
    worker.push(getAllworkers().find(el => el.id==id).surname)
    worker.push(getAllworkers().find(el => el.id==id).salary)

    return worker

}

/*let arrowPrintDeveloper = (workers:any[])=> workers.forEach(if(worker.category == cat)
{
    workers.push(worker.Name+` `+worker.surname);
}    )*/

/*let arrowPrintDeveloper = getAllworkers().forEach(worker => {if(worker.category == Category.Developer)
{
    console.log(worker.Name+` `+worker.surname);
} })*/

function createCustomerID(name:string, id:number):string
{

    return name+" "+id

}

function createCustomer(name:string, age?:number, city?:string)
{
    if(age && city)
    {

        console.log(`Name: ${name}, age: ${age}, city: ${age}`)

    }
    else if(age)
    {

        console.log(`Name: ${name}, age: ${age}`)

    }
    else if(city)
    {

        console.log(`Name: ${name}, city: ${age}`)

    }
    else
    {

        console.log(`Name: ${name}`)

    }
}

function сheckoutWorkers(customer:string, ...workerIDs:number[])
{



}

console.log("Task 1.1");
logFirstAvailable(getAllworkers());

console.log("Task 1.2");
logWorkersNames(getWorkersNamesByCategory(Category.Analyst));

console.log("Task 1.3");
//arrowPrintDeveloper

getAllworkers().forEach(worker => {if(worker.category == Category.Developer)
    {
        console.log(worker.Name+` `+worker.surname);
    } })

console.log(getWorkerByID(3));


console.log("Task 1.4");
let myId:string = createCustomerID("Ann",10);
console.log(myId);
//let IdGenerator:string = (name:string, id:number) => {return name+" "+id};
let IdGenerator = (name:string, id:number) => {return name+" "+id};
console.log(IdGenerator("Stes",24));
IdGenerator = createCustomerID;
console.log(IdGenerator("Aik",13));

console.log("Task 1.5");
createCustomer("Vlad");
createCustomer("Vlad", 9);
createCustomer("Vlad",9,"Old fragmentation city");
getWorkersNamesByCategory();
logFirstAvailable();

enum Category {Analyst = "Business analyst", Developer ="Developer",Designer = "Designer",QA = "QA",Scrum = "Scrum master"}


function getAllworkers() 
{
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst},
        {id: 1, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst},
        {id: 1, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum},
        {id: 1, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer}
    ]
    return workers;
}
   
function logFirstAvailable(workers:any[]):void
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

function getWorkersNamesByCategory(cat:Category)
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

/*let arrowPrintDeveloper = (workers:any[])=> workers.forEach(if(worker.category == cat)
{
    workers.push(worker.Name+` `+worker.surname);
}    )*/

/*let arrowPrintDeveloper = getAllworkers().forEach(worker => {if(worker.category == Category.Developer)
{
    console.log(worker.Name+` `+worker.surname);
} })*/

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


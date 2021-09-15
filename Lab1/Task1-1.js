var Category;
(function (Category) {
    Category["Analyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["Scrum"] = "Scrum master";
})(Category || (Category = {}));
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}
function logFirstAvailable(workers = getAllworkers()) {
    //let workersNum:Number = workers.length
    console.log(workers.length);
    for (var worker of workers) {
        if (worker.available) {
            console.log(worker.Name + ` ` + worker.surname);
        }
    }
}
function getWorkersNamesByCategory(cat = Category.Designer) {
    let workers = [];
    for (var worker of getAllworkers()) {
        if (worker.category == cat) {
            workers.push(worker.Name + ` ` + worker.surname);
        }
    }
    return workers;
}
function logWorkersNames(workers) {
    console.log(workers);
}
function getWorkerByID(id) {
    let worker = [];
    worker.push(getAllworkers().find(el => el.id == id).Name);
    worker.push(getAllworkers().find(el => el.id == id).surname);
    worker.push(getAllworkers().find(el => el.id == id).salary);
    return worker;
}
/*let arrowPrintDeveloper = (workers:any[])=> workers.forEach(if(worker.category == cat)
{
    workers.push(worker.Name+` `+worker.surname);
}    )*/
/*let arrowPrintDeveloper = getAllworkers().forEach(worker => {if(worker.category == Category.Developer)
{
    console.log(worker.Name+` `+worker.surname);
} })*/
function createCustomerID(name, id) {
    return name + " " + id;
}
function createCustomer(name, age, city) {
    if (age && city) {
        console.log(`Name: ${name}, age: ${age}, city: ${city}`);
    }
    else if (age) {
        console.log(`Name: ${name}, age: ${age}`);
    }
    else if (city) {
        console.log(`Name: ${name}, city: ${age}`);
    }
    else {
        console.log(`Name: ${name}`);
    }
}
function сheckoutWorkers(customer, ...workerIDs) {
    let workers = [];
    for (var id of workerIDs) {
        let worker = getAllworkers().find(el => el.id == id);
        if (worker.available) {
            workers.push(worker.Name + ` ` + worker.surname);
        }
    }
    console.log(customer);
    return workers;
}
console.log("Task 1.1");
logFirstAvailable(getAllworkers());
console.log("Task 1.2");
logWorkersNames(getWorkersNamesByCategory(Category.Analyst));
console.log("Task 1.3");
//arrowPrintDeveloper
getAllworkers().forEach(worker => {
    if (worker.category == Category.Developer) {
        console.log(worker.Name + ` ` + worker.surname);
    }
});
console.log(getWorkerByID(3));
console.log("Task 1.4");
let myId = createCustomerID("Ann", 10);
console.log(myId);
//let IdGenerator:string = (name:string, id:number) => {return name+" "+id};
let IdGenerator = (name, id) => { return name + " " + id; };
console.log(IdGenerator("Stes", 24));
IdGenerator = createCustomerID;
console.log(IdGenerator("Aik", 13));
console.log("Task 1.5");
createCustomer("Vlad");
createCustomer("Vlad", 9);
createCustomer("Vlad", 9, "Old fragmentation city");
getWorkersNamesByCategory();
logFirstAvailable();
let myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(worker => console.log(worker));

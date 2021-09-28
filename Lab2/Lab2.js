var Category;
(function (Category) {
    Category["Analyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["Scrum"] = "Scrum master";
})(Category || (Category = {}));
function prizeReal(str) {
    console.log(str);
}
/*function getAllworkers()
{
    let workers:Workers[] = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst, markPrize:prizeReal},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst, markPrize:prizeReal},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum, markPrize:prizeReal},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, markPrize:prizeReal}
    ]
    return workers;
}*/
function getAllworkers() {
    let workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}
function getWorkerByID(id) {
    return getAllworkers().find(el => el.id == id);
}
function printWorker(worker) {
    console.log(`${worker.Name} ${worker.surname}, ${worker.salary}`);
}
let logPrize = prizeReal;
console.log(printWorker(getAllworkers()[1]));
console.log(getWorkerByID(3).Name);
//console.log(logPrize("kpop"));

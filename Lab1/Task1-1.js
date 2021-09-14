var Category;
(function (Category) {
    Category["Analyst"] = "Business analyst";
    Category["Developer"] = "Developer";
    Category["Designer"] = "Designer";
    Category["QA"] = "QA";
    Category["Scrum"] = "Scrum master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Analyst },
        { id: 1, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Analyst },
        { id: 1, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Scrum },
        { id: 1, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    //let workersNum:Number = workers.length
    console.log(workers.length);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log(worker.Name + " " + worker.surname);
        }
    }
}
function getWorkersNamesByCategory(cat) {
    var workers = [];
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.category == cat) {
            workers.push(worker.Name + " " + worker.surname);
        }
    }
    return workers;
}
function logWorkersNames(workers) {
    console.log(workers);
}
/*let arrowPrintDeveloper = (workers:any[])=> workers.forEach(if(worker.category == cat)
{
    workers.push(worker.Name+` `+worker.surname);
}    )*/
/*let arrowPrintDeveloper = getAllworkers().forEach(worker => {if(worker.category == Category.Developer)
{
    console.log(worker.Name+` `+worker.surname);
} })*/
logFirstAvailable(getAllworkers());
logWorkersNames(getWorkersNamesByCategory(Category.Analyst));
//arrowPrintDeveloper
getAllworkers().forEach(function (worker) {
    if (worker.category == Category.Developer) {
        console.log(worker.Name + " " + worker.surname);
    }
});

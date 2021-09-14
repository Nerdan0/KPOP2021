function getAllworkers() {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    //let workersNum:Number = workers.length
    console.log(workers.length);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        console.log(worker.Name + " " + worker.surname);
    }
}
logFirstAvailable(getAllworkers());

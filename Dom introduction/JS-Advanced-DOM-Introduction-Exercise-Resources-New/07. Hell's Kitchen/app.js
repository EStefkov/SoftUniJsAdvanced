const { Result } = require("selenium-webdriver/io/exec");

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestResturantP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#workers>p');

   function onClick() {
      const arr = JSON.parse(input.value);


      let resturants = {}
      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];
         let averageSalary = 0;
         let bestSalary = 0;

         for (const worker of workersArr) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({
               name: workerTokens[0], salary
            })
         }

         if (resturants[name]) {
            workers = workers.concat(resturants[name].workers);
         }
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

         bestSalary = workers[0].salary;
         averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         resturants[name] = {
            workers,
            averageSalary,
            bestSalary
         }



      });

      let bestResturantSalary = 0;
      let best = undefined;

      for (const name in resturants) {
         if (resturants[name].averageSalary > bestResturantSalary) {
            best = {
               name,
               workers: resturants[name].workers,
               bestSalary: resturants[name].bestSalary,
               averageSalary: resturants[name].averageSalary
            }
            bestResturantSalary = resturants[name].averageSalary;

         }
      }

      bestResturantP.textContent = `Name: ${best.name} Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`
      
      let workersResult =[];

      best.workers.forEach(worker=> {
         workersResult.push( `Name: ${worker.name} With Salary ${worker.salary}`);
      })
      
      workersP.textContent = workersResult.join(' ');
   }

}

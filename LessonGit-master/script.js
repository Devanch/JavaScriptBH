 'use strict';
 // let money = prompt("Ваш бюджет на месяц")
 // let time = prompt("Введите дату в формате YYYY-MM-DD")
 // var appdata = {
 //     budget: money,
 // 	expenses: {},
 // 	optionalExpenses: {},
 // 	income: [],
 // 	timeData: time,
 // 	savings: false
 // };
 // var obzras = prompt("Введите обязательную статью расходов в этом месяце")
 // var voobod = prompt("Во сколько обойдется")
 // var expenses = {
 //     obzras,
 //     voobod
 // };
 // alert(appdata.budget / 30)

 let money = +prompt("Ваш бюджет на месяц?", ''),
     time = prompt('Введите дату в формате YYYY-MM-DD', '');

 let appData = {
     budget: money,
     expenses: {},
     optionalExpenses: {},
     income: [],
     timeData: time,
     savings: false
 };

 let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
     a2 = prompt("Во сколько обойдется?", ''),
     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
     a4 = prompt("Во сколько обойдется?", '');



 // for (let i = 0; i > 2; i++) {
 //     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
 //         b = prompt("Во сколько обойдется?", '');
 //     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 51) {
 //         console.log("done");
 //         appData.expenses[a] = b;
 //     } else {
 //         console.log("error");
 //         i--;
 //     }
 // };

 let i = 0;
 do {
     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется?", '');

     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 51) {
         console.log("done");
         appData.expenses[a] = b;
     } else {
         console.log("error");
         i--;
     }
     i++;
 } while (i > 2);



 appData.moneyPerDay = appData.budget / 30;


 alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


 if (appData.moneyPerDay < 100) {
     console.log("Это минимальный уровень достатка!");
 } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
     console.log("Это средний уровень достатка!");
 } else if (appData.moneyPerDay > 2000) {
     console.log("Это высокий уровень достатка!");
 } else {
     console.log("Произошла ошибка");
 }
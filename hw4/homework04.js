// напишите функция, используя оператор '?'  или || 

function checkAge (age)
{if (age >18) {
return true;
} else {
    return confirm ('Родители разрешили?')
}
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

const login = prompt ("Укажите ваш возраст?");

alert ('Привет, друг');



// Напишите pow(x,n)

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }

alert ('x?');


// Перепешите с  использованием фукнции-стрелки

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }

    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
      }
      
      ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
      );

    

    //   Сортировать в порядке по убыванию

    let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию


alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );



// Трансформировать в массив имен

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = /* ... ваш код */

alert( names ); // Вася, Петя, Маша



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша


// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = /* ... ваш код ... */

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин


// Получить средний возраст
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  alert( getAverageAge(arr) ); // 28
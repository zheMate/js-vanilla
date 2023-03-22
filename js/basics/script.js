/* V Включение строго режима, только в начале файла, 
перед включением могут быть прописаны комменты */
"use strict";
// /* V Здесь будет JS код по основам V */
// //  Ctrl + /
// /* Alt+Shift+A */
// alert("Я JS!");

// let num = 5;
// alert(num);

// let admin;
// let name;

// name = "Джон";

// admin = name;

// alert(admin);

// // чем более подробнее и лаконичнее название переменной, тем лучше !
// let ourPlanetName = "Земля";
// let currentUserName = "Джон";

// /*  наименование констант в верхнем регистре только
// у переменных хранящих сильно закадированные данные, или же
// когда значение константы известно до выполнения скрипта и записывается в код*/
// const LIGHT_SALMON = "#ffa07a";
// const BIRTHDAY = "13.12.2012";


// function someCode() {
//     return 'Ваш День Рождения! '.BIRTHDAY;
// }
// /*  константа мой возраст не желательно прописывать в upperCase т.к.
//  она попадает под расчёты и является менее константой в отлии от BIRTHDAY */
// const myAge = someCode();
// alert(myAge);

// /* Infinity,
//  -Infinity, NaN это тоже числа   */
// alert(1 / 0);
// // Большой инт - в конце обязательно буква "n"
// const bigInt = 1234567890123456789012345678901234567890n;
// alert(bigInt);
// /* Разница между "" и '' нет,
// в то время как `` могут склеивать значения */
// let str = "Привет";
// let str2 = 'Мир';
// let phrase = `${str} ${str2} !`;
// alert(phrase);
// /* По мимо текста можно и делать операции */
// alert(`Результат : ${1 + 2}`);
// /* В JS null не является "ссылкой на несуществующий объект", или нулевым указателем */
// let age = null;
// /* Если переменной не присвоенно значение то это будет тип
// данных undefined */
// let cozyAge;
// alert(cozyAge);
// /* null => для присовения переменной
// "пустого" или "неизвестного" значения
// undefined => для проверок была ли переменная назначена
// */

// /* typeof x работает так, или так typeof(x) */

// alert(typeof (1234567890123456789012345678901234567890n));

// /* Тип null это объект, это офф признанная ошибка */
// typeof null;

// /* Второй параметр является необязательным, но если не указать его,
//  то Internet Explorer вставит строку "undefined" в поле для ввода. */
// let ageQuantity = prompt('Сколько тебе лет ?', 100);
// alert(`Тебе ${ageQuantity} лет !`);

// let isBoss = confirm('Ты босс-молокосос ?');
// if (isBoss === true) {
//     alert('Да я босс-молокосос...');
// }
// else {
//     alert('Нет я просто босс !');
// }


// let whatsYourName = prompt('Кто ты воин ?', 'Капибара');
// alert(`Великий воин ${whatsYourName}, добро пожаловать домой!`);



// /* V Остаток от деления (знак процента) V */

// alert(5 % 2);


// /* V Возведение в степень ** V */

// alert(2 ** 3);

// /* V Взятие кубического корня(как и в матиматике, при возведение в дробную степень)  V */

// alert(4 ** (1 / 2));

// // Не влияет на числа
// let x = 1;
// alert(+x); // 1

// let y = -2;
// alert(+y); // -2

// /* Преобразует не числа, в числа тоже самое что и Number() */
// alert(+true); // 1
// alert(+"");   // 0

// let apples = "2";
// let oranges = "3";

// // оба операнда предварительно преобразованы в числа
// alert(+apples + +oranges); // 5

// // более длинный вариант
// // alert( Number(apples) + Number(oranges) ); // 5

// /* Сокращённая арифметика с присваиванием
// у вызовы с присваиванием точно такой же приоритет что и
// обычное присваивание
// */

// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert(n);

// /* ! ИНКРЕМЕНТ И ДЕКРЕМЕНТ СТРОГО НА ПЕРМЕННЫХ ! */
// /* инкремент ++ (увеличение на 1) */

// let someCounter = 2;
// someCounter++;        // работает как counter = counter + 1, просто запись короче
// alert(someCounter); // 3

// /* в то время как -- уменьшает переменную на 1 */

// let anotherCounter = 2;
// anotherCounter--;
// alert(anotherCounter);

// /* можно писать как в постфиксной форме, так и в префиксной форме */
// /*
// counter++
// ++counter
// */

// let prefixCounter = 1;
// let a = ++prefixCounter;
// alert(a); // 2

// let postfixCounter = 1;
// let b = counter++; //постфиксная форма counter++ также увеличивает counter но возвращает страое значение
// alert(b); // 1


// /* Если результат оператора не используется, а нужно только увеличить/уменьшить переменную => тогда без разницы что использовать */

// /*
// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, обе строки сделали одно и то же
// */

// /* Если тут же хочется использовать результат, то нужна префиксная форма */

// /*
// let counter = 0;
// alert(++counter); // 1
// */

// /* Если нужно увеличить и при этом получить значение переменной до увеличения - нужна постфиксная форма */

// /*
// let counter = 0;
// alert(counter++); // 0
// */

// let comma = (1 + 2, 3 + 4); // Скобки играют важную роль, у запятой приоритет ниже чем у знака равно
// alert(a); // 7 (результат вычисления 3 + 4)

// /* Без них в a=1 + 2, 3 + 4 сначала выполнится +, суммируя числа в a = 3, 7 после будет присвоение a = 3, остальное будет игнорировано, точно также как в (a = 1 + 2), 3 + 4*/


// /*
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)

// 1). Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.

// 2). Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.

// 3).Сложение со строкой превращает число 5 в строку и добавляет к строке.

// 4).Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).

// 5).null становится 0 после численного преобразования.
// 6).undefined становится NaN после численного преобразования.
// 7).Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично  пустой строке, становится 0 после численного преобразования.
// */


// let firstArgument = prompt("Первое число?", 1);
// let secondArgument = prompt("Второе число?", 2);

// alert(`Результат примера 1 + 2 => ${+firstArgument + +secondArgument} `);


// /*
// 5 > 4 → true
// "ананас" > "яблоко" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false
// */

// /*
// Да, выведется.
// Любая строка, кроме пустой (а строка "0" – не пустая), в логическом контексте становится true.
// Можно запустить и проверить:
// */
// if ("0") {
//     alert('Привет');
// }


// let whatOfficialNameOfJS = prompt("Какое «официальное» название JavaScript?", '');

// if (whatOfficialNameOfJS == "ECMAScript") {
//     alert("Верно !");
// }
// else {
//     alert("Не знаете? ECMAScript!");
// }

// let mysteryNumber = prompt("V Введите число пж V", 0);

// if (mysteryNumber > 0) {
//     alert(1);
// } else if (mysteryNumber < 0) {
//     alert(-1);
// }
// else {
//     alert(0);
// }

// let result;

// result = (a + b < 4) ? 'Мало' : 'Много';

// let message;

// (login == 'Сотрудник')
//     ? message = 'Привет'
//     : (login == 'Директор')
//         ? message = 'Здравствуйте'
//         : (login == '') ? message = 'Хм, а где логин ?'
//             : message = '';


/* 
Выведет 2 первое true значение у ИЛИ
alert( null || 2 || undefined );

alert(1) выведет undefined ИЛИ будет искать истину и выведет 2 и на этом остановится
alert( alert(1) || 2 || alert(3) );

alert выведет null тк у оператора И в приоритете false
alert( 1 && null && 2 );

вывод 1 потом undefined
alert(alert(1) && alert(2));

у оператора И приоритет => сначало он 2 И 3 оба значения 
true => выводится последнее => выражение приобреатет вид
null || 3 || 4 => ИЛИ ищет истину, а первая истина 3 
alert( null || 2 && 3 || 4 );

let ageOfSomebody = 90;
if(ageOfSomebody >= 14 && <= 90) {
    alert(`Интересный возраст : ${ageOfSomebody}`);
}
else{
    alert(`ООООООЧЕНЬ интересный возраст : ${ageOfSomebody}`);
}

if(!(ageOfSomebody >= 14 && age <= 90))

if(ageOfSomebody < 14 || age > 90)

// Выполнится
// -1 => true
if (-1 || 0) alert( 'first' );

// Не выполнится
// И ищет false 
if (-1 && 0) alert( 'second' );

// Выполнится
// И если оба тру => последнее значение => null || 1 => ИЛИ ищет тру => алерт выполнится
if (null || -1 && 1) alert( 'third' );

let login = prompt("Введите ваш логин: ", "");
if (login === "Админ") {
    let password = prompt("Введите пароль: ", "");

    if (password === "Я Главный") {
        alert("Здравствуйте");
    }
    else if (password === '' || password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
}
else if (login === '' || login === null) {
    alert("Отменено !");
}
else {
    alert("Я вас не знаю");
}


Последнее значения цикла 1 тк 0 это не i
let i = 3;
while (i) {
  alert( i-- );
}

Префиксный вариант ↓
Сначала увеличение а потом проверка ↓
let i = 0;
while (++i < 5) alert( i );
1 2 3 4

Постфиксный вариант ↓
Сначала сравнение а потом увеличение ↓
let i = 0;
while (i++ < 5) alert( i );

При выполнении цикла фор никакой разницы нет↓
Постфиксный вариант ↓
for (let i = 0; i < 5; i++) alert( i );
0 1 2 3 4 
Префиксный вариант ↓
for (let i = 0; i < 5; ++i) alert( i );
0 1 2 3 4 

for(let i = 2; i <= 10; i++){
    if(i % 2) continue;
    alert(i);
}

let i = 0;
while(i<3){
    alert(`number ${i++}!`)
}


let enteredNumber;

do {
    enteredNumber = prompt("Введите число больше 100 ?", 0);
}
while (enteredNumber <= 100 && enteredNumber );

let n = 100;

stopper :
for(let i=2; i <= n; i++){
    let flag = true;
    for(let j=2; j < i; j++){
        if(i % j == 0){
            flag = false;
            continue stopper;
        }
    }
    if(typeof flag == "boolean"){
        console.log(i);
    }
}
let browser = "Yandex";

if(browser == "Edge")
{
    alert("You've got the Edge!");   
}else if(browser == "Chrome" || "Firefox" || "Safari" || "Opera"){
    alert("Okay we support these browsers too");
}
else {
    alert("We hope that this page looks ok !");
}

const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0:
    alert('Вы ввели число 0');
    break;
    
    case 1:
    alert('Вы ввели число 1');
    break;

    case 2:
    case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
↑ Оба вариант работают одинаково ↓
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

let age = prompt("Ваш возраст ?", "");

function checkAge(age){
    (+age > 18) ? alert('true') : confirm('Родители разрешили ?');
}
checkAge(+age);

function checkAge(age){
    return (age > 18) || confirm('Родители разрешили ?');
}
checkAge(+age);

function min(firstOperand, secondOperand){
    (+firstOperand > +secondOperand) ? alert(`Меньшее число ${secondOperand}`) : alert(`Меньшее число ${firstOperand}`);
}

function pow(number, degree){
    let result =  number ** degree;
    return result;
}


let number = prompt("Введите число для возведения в степень : ", 0);
let degree = prompt("Введите степень для числа : ", 0);


if (degree < 1){
    alert(`Степень ${degree} не поддерживается, используйте натуральное число`);
}
else{
    alert(`Результат возведения в степень => ${pow(number, degree)}` );
}

let ask = (question, yes, no)  => {
    (confirm(question)) ? yes() : no();
};

ask(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

function pow(x,n)  // <- отсутствует пробел между аргументами
{  // <- фигурная скобка на отдельной строке
  let result=1;   // <- нет пробелов вокруг знака =
  for(let i=0;i<n;i++) {result*=x;}   // <- нет пробелов
  // содержимое скобок { ... } лучше вынести на отдельную строку
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- технически допустимо,
// но лучше написать в 2 строки, также нет пробелов и точки с запятой
if (n<=0)  // <- нет пробелов, стоит добавить отступ в одну строку сверху
{   // <- фигурная скобка на отдельной строке
  // ниже - слишком длинная строка, лучше разбить для улучшения читаемости
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else // <- можно на одной строке, вместе: "} else {"
{
  alert(pow(x,n))  // вложенный вызов функции, нет пробелов и точки с запятой
}

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {};
function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

const user = {
  name: "John"
};

// Работает!
user.name = "Pete";

// Ошибка
user = 123


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;
function sumOfSalaries(obj) {
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

alert(`Сумма зарплат: ${sumOfSalaries(salaries)}`);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
let multi = 0;
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            multi = obj["key"] * 2;
        }
    }
    return multi;
}

console.log(`Результат умножения ${multiplyNumeric(menu)}`);


function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

Исправление примера выше ↓
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John

let calculator = {
  
    read() {
        this.a = +prompt("Введите a : ", 0);
        this.b = +prompt("Введите b: ", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },  
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); 

  let someObject = {};
  function A() {return someObject;}
  function B() {return someObject;}
  alert(new A() == new B() );

    function Calculator () {
      this.read = function() {
          this.a = +prompt('Введите A : ', 0);
          this.b = +prompt('Введите Б : ', 0);
      };
      this.sum = function() {
          return this.a + this.b;
      };
      this.mul = function() {
          return this.a * this.b;
      };
    }
    let calculator = new Calculator();
    calculator.read();
    alert("Cумма объектов : " + calculator.a + " + " + calculator.b + " = " + calculator.sum());
    alert("Произведение объектов : " + calculator.a + " * " + calculator.b + " = " + calculator.mul());

    
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Введите число для добавления : ', 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);

 */


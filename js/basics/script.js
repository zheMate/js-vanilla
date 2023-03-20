/* V Включение строго режима, только в начале файла, 
перед включением могут быть прописаны комменты */
"use strict";
/* V Здесь будет JS код по основам V */
//  Ctrl + /
/* Alt+Shift+A */
alert("Я JS!"); 

let num = 5;
alert(num);

let admin; 
let name;

name = "Джон";

admin = name;

alert(admin);

// чем более подробнее и лаконичнее название переменной, тем лучше !
let ourPlanetName = "Земля";
let currentUserName = "Джон";

/*  наименование констант в верхнем регистре только 
у переменных хранящих сильно закадированные данные, или же 
когда значение константы известно до выполнения скрипта и записывается в код*/
const LIGHT_SALMON  = "#ffa07a";
const BIRTHDAY = "13.12.2012";


function someCode() {
    return 'Ваш День Рождения! ' . BIRTHDAY; 
}
/*  константа мой возраст не желательно прописывать в upperCase т.к.
 она попадает под расчёты и является менее константой в отлии от BIRTHDAY */
const myAge = someCode();
alert(myAge);

/* Infinity,   
 -Infinity, NaN это тоже числа   */
alert(1/0);
// Большой инт - в конце обязательно буква "n"
const bigInt = 1234567890123456789012345678901234567890n;
alert(bigInt);
/* Разница между "" и '' нет, 
в то время как `` могут склеивать значения */
let str = "Привет";
let str2 = 'Мир';
let phrase = `${str} ${str2} !`;
alert(phrase);
/* По мимо текста можно и делать операции */
alert(`Результат : ${1+2}`);
/* В JS null не является "ссылкой на несуществующий объект", или нулевым указателем */
let age = null;
/* Если переменной не присвоенно значение то это будет тип
данных undefined */
let cozyAge;
alert(cozyAge);
/* null => для присовения переменной 
"пустого" или "неизвестного" значения
undefined => для проверок была ли переменная назначена
*/

/* typeof x работает так, или так typeof(x) */

alert(typeof(1234567890123456789012345678901234567890n));

/* Тип null это объект, это офф признанная ошибка */
typeof null;

/* Второй параметр является необязательным, но если не указать его,
 то Internet Explorer вставит строку "undefined" в поле для ввода. */
let ageQuantity = prompt('Сколько тебе лет ?', 100);
alert(`Тебе ${ageQuantity} лет !`);

let isBoss = confirm('Ты босс-молокосос ?');
if(isBoss === true)
{
    alert('Да я босс-молокосос...');
}
else 
{
    alert('Нет я просто босс !');
}


let whatsYourName = prompt('Кто ты воин ?', 'Капибара');
alert(`Великий воин ${whatsYourName}, добро пожаловать домой!`);



/* V Остаток от деления (знак процента) V */

alert( 5 % 2 );


/* V Возведение в степень ** V */

alert(2**3);

/* V Взятие кубического корня(как и в матиматике, при возведение в дробную степень)  V */

alert(4 ** (1/2)); 

// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

/* Преобразует не числа, в числа тоже самое что и Number() */
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

/* Сокращённая арифметика с присваиванием 
у вызовы с присваиванием точно такой же приоритет что и 
обычное присваивание
*/

let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

alert(n);

/* ! ИНКРЕМЕНТ И ДЕКРЕМЕНТ СТРОГО НА ПЕРМЕННЫХ ! */
/* инкремент ++ (увеличение на 1) */

let someCounter = 2;
someCounter++;        // работает как counter = counter + 1, просто запись короче
alert( someCounter ); // 3

/* в то время как -- уменьшает переменную на 1 */

let anotherCounter = 2;
anotherCounter--;
alert(anotherCounter);

/* можно писать как в постфиксной форме, так и в префиксной форме */
/* 
counter++
++counter
*/

let prefixCounter = 1;
let a = ++prefixCounter;
alert(a); // 2

let postfixCounter = 1;
let b = counter++; //постфиксная форма counter++ также увеличивает counter но возвращает страое значение
alert(b); // 1


/* Если результат оператора не используется, а нужно только увеличить/уменьшить переменную => тогда без разницы что использовать */

/* 
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же
*/

/* Если тут же хочется использовать результат, то нужна префиксная форма */

/* 
let counter = 0;
alert(++counter); // 1
*/

/* Если нужно увеличить и при этом получить значение переменной до увеличения - нужна постфиксная форма */

/* 
let counter = 0;
alert(counter++); // 0
*/

let comma = (1+2, 3+4); // Скобки играют важную роль, у запятой приоритет ниже чем у знака равно
alert(a); // 7 (результат вычисления 3 + 4)

/* Без них в a=1 + 2, 3 + 4 сначала выполнится +, суммируя числа в a = 3, 7 после будет присвоение a = 3, остальное будет игнорировано, точно также как в (a = 1 + 2), 3 + 4*/ 


/* 
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

1). Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.

 Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.

 Сложение со строкой превращает число 5 в строку и добавляет к строке.

 Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
 
 null становится 0 после численного преобразования.
 undefined становится NaN после численного преобразования.
 Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично  пустой строке, становится 0 после численного преобразования.
*/ 



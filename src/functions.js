// В этом простом задании вам дается число, и вы должны сделать его положительным.

//     Примечания
//     - число уже может быть положительным, и в этом случае никаких изменений не требуется.
const makePositive = (number) => {
    if (number < 0) {
        return -number
    } else {
        return number
    }
}

export { makePositive };


// Создайте функцию, которая будет возвращать оператор приветствия, использующий входные данные; ваша программа должна возвращать, 'Hi <name>!'.Если передаётся пустая строка - возвращается 'Hi!'

//     ```js
// greet('John'); ➞ 'Hi John!'
// greet('Elise'); ➞ 'Hi Elise!'
// greet(''); ➞ 'Hi!'
// ```
const greet = (name) => {
    if (name === '') {
        return 'Hi!'
    } else {
        return `Hi ${name}!`
    }

};

export { greet };


// Создать функцию, которая принимает имя и фамилию пользователя, а возвращает имя и первую букву фамилии.

// ```js
// getShotFullName('Oliver', 'Smith'); ➞ 'Oliver S.'
// getShotFullName('Jack', 'Johnson'); ➞ 'Jack J.'
// getShotFullName('Harry', 'Williams'); ➞ 'Harry W.'
// getShotFullName('Jacob', 'Brown'); ➞ 'Jacob B.'
// getShotFullName('Charley', 'Jones'); ➞ 'Charley J.'
// ```
const getShotFullName = (firstName, secondName) => {
    return firstName + ' ' + secondName[0] + '.';
};

export { getShotFullName };



// Реализуйте функцию, которая принимает две строки, состоящие из `t` и`f`, возвращает новую строку, которая показывает, как две строки взаимодействуют между собой.\
// Правила взаимодействия:
// - когда в одной строке символов меньше чем в другой, получается '-'.
// - когда символ `t` взаимодействует с символом`t`, получается символ`t`.
// - когда символ `f` взаимодействует с символом`f`, получается символ`f`.
// - когда символ `f` взаимодействует с символом`t`, получается символ`.`.

const neutralise = (string1, string2) => {
    if (string1.length !== string2.length) {
        return "-";
    }
    let result = "";
    for (let i = 0; i < string1.length; i++) {
        let char1 = string1[i];
        let char2 = string2[i];

        if (char1 === 't' && char2 === 't') {
            result += 't';
        } else if (char1 === 'f' && char2 === 'f') {
            result += 'f';
        } else if (char1 === 'f' && char2 === 't' || char1 === 't' && char2 === 'f') {
            result += '.';
        }

        result += '';
    }
    return result;
};

export { neutralise };



// Ваша задача - создать функцию, которая выполняет три основные математические операции и возвращает результат вычисления.
// Функция должна принимать строку, представляющую арифметическое выражение.
// Функция должна возвращать результат вычисления после применения выбранной операции.
//     Операции: `+`, `-`, `*`
const basicOp = (operation) => {
    let result = 0;
    let sign = '';
    for (let i = 0; i < operation.length; i++) {
        if (operation[i] === '+' || operation[i] === '-' || operation[i] === '*') {
            sign = operation[i];
        }
    }

    const numbers = operation.split(sign).map(Number);
    const num1 = numbers[0];
    const num2 = numbers[1];

    if (sign === '+') {
        result = num1 + num2;
    } else if (sign === '-') {
        result = num1 - num2;
    } else if (sign === '*') {
        result = num1 * num2;
    } else {
        return 'Invalid operator';
    }

    return result;
};


export { basicOp };
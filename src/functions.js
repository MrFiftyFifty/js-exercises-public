const getSymbol = (str, number) => {
    if (number >= 0 && number < str.length) {
        return str[number];
    } else {
        return "";
    }
};

const removeDigit = (number) => {
    if (number >= 100 && number <= 999) {
        let first = Math.floor(number / 100);
        let third = number % 10;
        return first * 10 + third;
    } else {
        return "Не входит в диапазон";
    }
};

const isSquare = (num1, num2) => {
    if (num1 === num2 ** 2 || num2 === num1 ** 2) {
        return true;
    } else {
        return false;
    }
};

const numberLength = (number) => {
    if (number >= 0 && number < 2000000000) {
        return number.toString().length;
    } else {
        return "Не в диапазоне"
    }
};

const flipOver = (str) => {
    let res = "";
    for (let index = 0; index < str.length; index += 1) {
        res = str[index] + res;

    }
    return res;
};


export { getSymbol, removeDigit, isSquare, numberLength, flipOver };
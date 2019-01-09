function splitWords(str) {
    let words = str.split(" ").filter(function lengthCheck(el) {
        return (el.length > 0);
    })
    return (words);
}

function isAlpha(el) {
        if ((el[0] >= 'A' && el[0] <= 'Z')
        || (el[0] >= 'a' && el[0] <= 'z')) {
            return (1);
        }
        return (0);
}

function isNum(el) {
        if (el[0] >= '0' && el[0] <= '9') {
            return (1);
        }
        return (0);
}

function isOther(el) {
    if (isNum(el) || isAlpha(el)) {
        return (0);
    }
    return (1);
}

function printArray(array) {
    for (var i = 0; array[i]; i++) {
        console.log(array[i]);
    }
}

if (process.argv.length > 2) {
    let array = new Array();
    for (var i = 2, argc = process.argv.length; i < argc; i++) {
        array.push(splitWords(process.argv[i]));
    }
    array = [].concat.apply([], array);
    let words = array.filter(isAlpha);
    let numbers = array.filter(isNum);
    let other = array.filter(isOther);

    printArray(words.sort(function (a, b) {
        var comparison = a.toLowerCase().localeCompare(b.toLowerCase());
        if (comparison == 0) {
            return (a.localeCompare(b));
        }
        return (comparison);
    }));
    printArray(numbers.sort());
    printArray(other.sort());
}
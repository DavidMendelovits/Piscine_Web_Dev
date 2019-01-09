
function splitWords(str) {
    let words = str.split(" ").filter(function lengthCheck(el) {
        return (el.length > 0);
    })
    return (words);
}

if (process.argv.length > 2) {
    let array = new Array();
    for (var i = 2, argc = process.argv.length; i < argc; i++) {
        array.push(splitWords(process.argv[i]));

    }
    let result = [].concat.apply([], array);

    result.sort();
    for (var i = 0; result[i]; i++) {
        process.stdout.write(result[i] + "\n");
    }
}
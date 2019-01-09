function isSorted(array) {
    let sortedCopy = array.slice(0).sort();
    for (var i = 0; sortedCopy[i] && array[i]; i++) {
        if (sortedCopy[i] != array[i]) {
            return (0);
        }
    }
    return (1);
}

if (process.argv.length > 2) {
    let array = new Array();

    for (var i = 2, argc = process.argv.length; i < argc; i++) {
        array.push(process.argv[i]);
    }
    if (isSorted(array)) {
        console.log("is sorted!");
    }
    else {
        console.log("isn't sorted!");
    }
}
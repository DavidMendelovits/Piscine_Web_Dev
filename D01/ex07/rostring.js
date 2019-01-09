function swapElements(array, index_a, index_b) {
    var tmp = array[index_a];
    array[index_a] = array[index_b];
    array[index_b] = tmp;
}

function rotateArrayLeft(array) {
    
    console.log(array.shift);

    return (array);
}

function rostring(str) {
    let words = str.split(" ").filter(function wordCheck(el) {
        return (el.length > 0);
    })
    words.push(words.shift());
    process.stdout.write(words.join(' ') + "\n");
}

if (process.argv.length > 2) {
    rostring(process.argv[2]);
}
function epur_str(str) {
    let words = str.split(" ");
    let word_count = words.length;
    var array = new Array();
    for (var i = 0; i < word_count; i++) {
        if (words[i].length > 0) {
            array.push(words[i]);
        }
    }
    for (var i = 0; array[i]; i++) {
        process.stdout.write(array[i]);
        if (i < array.length - 1) {
            process.stdout.write(" ");
        }
    }
    console.log();
}

if (process.argv.length > 2) {
    epur_str(process.argv[2]);
}
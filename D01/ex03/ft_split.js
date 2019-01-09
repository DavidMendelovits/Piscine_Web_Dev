function ft_split(str) {
    var array = str.split(" ");
    array.sort();

    process.stdout.write("Array\n(\n");
    for (var i = 0; array[i]; i++) {
        process.stdout.write("  [" + i + "] => " + array[i] + "\n");
    }
    process.stdout.write(")\n");
   // console.log(array.sort());
}

ft_split("world Hello AAA");
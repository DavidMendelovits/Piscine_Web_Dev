function aff_param() {
    var args = process.argv.slice(2);
    for (var i = 0; args[i]; i++) {
        console.log(args[i]);
    }
}

aff_param();
function condenseStr(str) {
    let result = str.replace(/\s\s+/g, ' ');
    if (result[0] == ' ' || result[result.length - 1] == ' ') {
        return (result.trim());
    }
    return (result);
}

if (process.argv.length > 2) {
    process.stdout.write(condenseStr(process.argv[2]) + "\n");
}
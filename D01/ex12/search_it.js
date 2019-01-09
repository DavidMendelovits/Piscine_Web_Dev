function searchIt(searchTerm, keyValuePairs) {
    let array = new Array();
    let tmp = new Array();
    let ret = '';

    for (let i = 0; keyValuePairs[i]; i++) {
        tmp = keyValuePairs[i].split(":");
        if (!searchTerm.localeCompare(tmp[0])) {
            ret = tmp[1];
        }
    }
    return (ret);
}

if (process.argv.length > 3) {
    let searchResult;
    searchResult = searchIt(process.argv[2], process.argv.slice(3));
    if (searchResult.length) {
        process.stdout.write(searchResult + "\n");
    }
}

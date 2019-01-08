
function get_input() {

    process.stdin.setEncoding('utf8');


    process.stdout.write("Enter a number: ");
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        console.log(chunk + " is your input");
    })

    process.stdin.on('end', () => process.exit(exitCode));
}

function oddEven() {
    var data = get_input();

    if (isNaN(data)) {
        process.stdout.write(data + " is not a number\n");
    }
}

oddEven();
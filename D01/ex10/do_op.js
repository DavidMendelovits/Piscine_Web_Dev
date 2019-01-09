function do_op(argv) {

    let op_a = argv[0].replace(/\s/g, '');
    let operator = argv[1].replace(/\s/g, '');
    let op_b = argv[2].replace(/\s/g, '');

    if (!operator.localeCompare("+") || !operator.localeCompare("-")) {
        return (!operator.localeCompare("+") ?
        (parseInt(op_a) + parseInt(op_b)) :
        (parseInt(op_a)) - parseInt(op_b));
    }

    if (!operator.localeCompare("*") ||
    !operator.localeCompare("/") ||
    !operator.localeCompare("%")) {
        if (!operator.localeCompare("*") || !operator.localeCompare("/")) {
            return (!operator.localeCompare("*") ?
                    parseInt(op_a) * parseInt(op_b) :
                    parseInt(op_a) / parseInt(op_b));
        }
        else {
            return (parseInt(op_a) % parseInt(op_b));
        }
    }
}

if (process.argv.length == 5) {
    process.stdout.write(do_op(process.argv.slice(2)) + "\n");
}
else {
    process.stdout.write("Incorrect Parameters\n");
}
function isOp(op) {
    if (!op.localeCompare("*") ||
    !op.localeCompare("/") ||
    !op.localeCompare("+") ||
    !op.localeCompare("-") ||
    !op.localeCompare("%")) {
        return (1);
    }
    return (0);
}

function isValidExpr(expr) {
    for (let i = 0; expr[i]; i++) {
        if (expr[i] != ' ' && !(expr[i] >= '0' && expr[i] <= '9') &&
            !isOp(expr[i])) {
                return (0);
            }
        }
    return (1);
}

if (process.argv.length == 3) {
    if (isValidExpr(process.argv[2])) {
        process.stdout.write(eval(process.argv[2]) + "\n");
    }
    else {
        process.stdout.write("Invalid Syntax\n");
    }
}
else {
    process.stdout.write("Incorrect Paremeters\n");
}
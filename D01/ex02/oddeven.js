function oddEven()
{
    process.stdin.setEncoding('utf8');


    process.stdout.write("Enter a number: ");
    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            if (isNaN(chunk)) {
               process.stdout.write("'" + chunk.replace(/\n/g, '') + "'" + " is not a number\n");
            }
            else {
                process.stdout.write("The number " + parseInt(chunk));
                process.stdout.write((parseInt(chunk) % 2 ? " is odd\n" : " is even\n"));
            }
        }
    });
    
    process.stdin.on('end', () => {
      process.stdout.write('end');
    }); 
}

oddEven();
var fs = require('fs');

let content;

const titleReg = /(?<=title=)(.*)(?=>\b)/g;

function magnify(data) {
 //   let anchors = data.match(/<a[^>]*>([^<]+)<\/a>/g);
    console.log("printing data...");
    console.log(data.replace(/(?<=title=)(.*)(?=>\b)/mg, function upper(x) {
            return (x.toUpperCase());
        }));
}

if (process.argv.length > 2) {
    fs.readFile(process.argv[2], "utf-8", function (err, data) {
        if (err) {
            throw err;
        }
        process.stdout.write("passing data to function:\n" + data);
        content = magnify(data);
    })
}
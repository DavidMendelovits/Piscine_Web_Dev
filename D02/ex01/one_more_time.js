// [Day] [Date] [month] [year] [hours]:[minutes]:[seconds]

let second = 1;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let week = day * 7;
let year = day * 365;

console.log("there are " + year + " seconds in a year");


function readTime(formattedTime) {
    console.log(formattedTime);
    return (null);
}

if (process.argv.length > 2) {
    time = readTime(process.argv[2]);
}
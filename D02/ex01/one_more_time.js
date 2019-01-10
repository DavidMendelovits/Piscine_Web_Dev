// [Day] [Date] [month] [year] [hours]:[minutes]:[seconds]

function getMonth(month) {
    if (!month.localeCompare("January")) {
        return (1);
    }
    if (!month.localeCompare("February")) {
        return (2);
    }
    if (!month.localeCompare("March")) {
        return (3);
    }
    if (!month.localeCompare("April")) {
        return (4);
    }
    if (!month.localeCompare("May")) {
        return (5);
    }
    if (!month.localeCompare("June")) {
        return (6);
    }
    if (!month.localeCompare("July")) {
        return (7);
    }
    if (!month.localeCompare("August")) {
        return (8);
    }
    if (!month.localeCompare("September")) {
        return (9);
    }
    if (!month.localeCompare("October")) {
        return (10);
    }
    if (!month.localeCompare("November")) {
        return (11);
    }
    if (!month.localeCompare("December")) {
        return (12);
    }
}

function readTime(formattedTime) {
    let dateArray = formattedTime.split(" ");
    
    let weekDay;
    let date;
    let month;
    let year;
    let clockTime;
    let hours;
    let minutes;
    let seconds;

    if (dateArray[0]) {
        weekDay = dateArray[0].match(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)$/g) ;
    }
    if (dateArray[1]) {
        date = dateArray[1].match(/^\d+$/);
    }
    if (dateArray[2]) {
        month = dateArray[2].match(/^(January|February|March|April|May|June|July|August|September|October|November|December)$/g)
    }
    if (dateArray[3]) {
        year = dateArray[3].match(/^\d+$/);
    }
    if (dateArray[4]) {
        clockTime = dateArray[4].match(/^\d{2}:\d{2}:\d{2}$/);
    }

    if (!weekDay || !date || !month || !year || !clockTime) {
        process.stdout.write("Wrong format\n");
        return ;
    }
    hours = clockTime[0].split(":")[0];
    minutes = clockTime[0].split(":")[1];
    seconds = clockTime[0].split(":")[2];

    console.log(Date.UTC(year[0], getMonth(month[0]), date[0], parseInt(hours), parseInt(minutes), parseInt(seconds)) / 1000);
}

if (process.argv.length > 2) {
    time = readTime(process.argv[2]);
}
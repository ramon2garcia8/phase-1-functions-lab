// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const headQuater = 42;
    return Math.abs(someValue - headQuater);
}

function distanceFromHqInFeet(someValue) {
    const distFromHqinBlocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    const blockInFeet = 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distFromHqinBlocks * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const blockInFeet = 264;
    let feetTravelled = Math.abs(start - destination) * blockInFeet;
    return feetTravelled;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let returnValue;
    const blockInFeet = 264;
    const centsPerFoot = 0.02;
    const firstFree = 400;
    let feetTravelled = Math.abs(start - destination) * blockInFeet;

    if (feetTravelled <= 400) {
        returnValue = 0;
    } else if (feetTravelled > 400 && feetTravelled <=2000) {
       returnValue = (feetTravelled - firstFree) * centsPerFoot;
       //returnValue = feetTravelled * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <=2500) {
        returnValue = 25;
    } else if (feetTravelled > 2500) {
        returnValue = "cannot travel that far";
    }
    return returnValue;
}

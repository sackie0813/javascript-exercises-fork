function getAge (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest,currentPerson) =>  {
        let currentAge = (getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath));
        let oldestAge = (getAge(oldest.yearOfBirth, oldest.yearOfDeath));
        if (currentAge > oldestAge) return currentPerson;
        else return oldest;
    });
}

/*

*/




// Do not edit below this line
module.exports = findTheOldest;

function age(person) {
  const birth = person.yearOfBirth;
  const death = person.yearOfDeath || (new Date).getFullYear();
  return death - birth;
}

const findTheOldest = function(peopleArray) {
  const oldest = peopleArray.reduce((oldestPerson, nextPerson) => {
    return age(oldestPerson) > age(nextPerson) ? oldestPerson : nextPerson;
  });
  return oldest;
};

module.exports = findTheOldest;

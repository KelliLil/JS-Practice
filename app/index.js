import people from "./people.js";



console.log(people);

const olderPeople = people.filter(
  (theCurrentPersonThatIAmCheckingTheAgeFor4) =>
    theCurrentPersonThatIAmCheckingTheAgeFor4.age > 27
);

const peopleThatStartWithJ = people.filter((person) =>
  person.name.startsWith("J")
);

const peopleWithSalutation = people.map(
  (person) => `${person.salutation} ${person.name}`
);

console.log(peopleWithSalutation);

function createBioCard(person) {
  return `
    <p>${person.salutation} ${person.name} is ${person.age} years old.</p>
  `;
}

const bioCards = people.map(createBioCard).join("");

console.log(bioCards);

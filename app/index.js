// This will leverage the OS's thread pool to perform work
// This is the most common way to perform asynchronous code
// step into the waiting room and ready for appt, wait in second room to listen for when your turn
const response = await fetch("https://jsonplaceholder.typicode.com/users");

// Asynchronously read raw response data as JSON
const people = await response.json();

const createBioCard = (person) => `
    <section>
      <h2>${person.name}</h2>
      <ul>
        <li><a href="mailto:${person.email}">${person.email}</a></li>
        <li><a href="tel:${person.phone}">${person.phone}</a></li>
        <li><a href="https://www.google.com/maps/place/${person.address.geo.lat},${person.address.geo.lng}">${person.address.street}, ${person.address.city}</a></li>
      </ul>
      <footer>
        <em>${person.company.catchPhrase}</em>
      </footer>
    </section>
    `;

const bioCardHTML = people.map(createBioCard).join("");

console.log(bioCardHTML);

const person = {
  name: "alice",
  city: "bvn",
};

console.log(person.name);

console.log(person["city"]);

// destructor

const { name, city } = person;

console.log(name);

console.log(city);

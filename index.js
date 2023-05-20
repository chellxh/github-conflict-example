function createPerson(name, age) {
  return {
    name,
    age,
    friends: [],
  };
}

function addPersonAsFriend(person, friend) {
  person.friends.push(friend);
  return person; // better name
}

module.exports = {
  createPerson,
  addPersonAsFriend,
};

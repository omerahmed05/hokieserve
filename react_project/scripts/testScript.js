const { fetchAllUsers, searchUsers, addUser } = require('./apiService.js');

// Test fetchAllUsers
fetchAllUsers()
  .then(users => console.log('Users:', users))
  .catch(err => console.error('Error:', err));

// Test searchUsers
searchUsers('John')
  .then(users => console.log('Search Results:', users))
  .catch(err => console.error('Error:', err));

// Test addUser
const newUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

addUser(newUser)
  .then(response => console.log('Added User:', response))
  .catch(err => console.error('Error:', err));

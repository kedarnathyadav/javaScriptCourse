// Callbacks
const greetUser = (username, callback) => {
  if (callback) {
    console.log(callback(username));
  } else {
    console.log(username);
  }
};
const cb = (username) => {
  return "Hello " + username;
};
greetUser("king", (u) => {
  return "Hello " + u;
});

greetUser("king");
// Promise example
import axios from 'axios';

// Using Promises
// axios.get("https://api.chucknorris.io/jokes/random")
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// Using async/await
const fetchJoke = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res.data);  // This will print the joke data from the API
  } catch (error) {
    console.log(error);  // This will log any error that occurs during the request
  }
}

// Fetch the joke using the correct API URL
fetchJoke("https://api.chucknorris.io/jokes/random");

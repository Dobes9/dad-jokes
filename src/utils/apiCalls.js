import axios from "axios";

const BASE_API_URL = "https://icanhazdadjoke.com/";

export async function loadJokes(numJokes) {
  let jokes = [];
  while (jokes.length < numJokes) {
    const response = await axios.get(BASE_API_URL, {
      headers: { accept: "application/json" },
    });
    jokes.push(response.data.joke);
  }
  return jokes;
}

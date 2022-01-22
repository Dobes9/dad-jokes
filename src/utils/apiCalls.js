import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BASE_API_URL = "https://icanhazdadjoke.com/";

export async function loadJokes(numJokes) {
  let jokes = [];
  while (jokes.length < numJokes) {
    const response = await axios.get(BASE_API_URL, {
      headers: { accept: "application/json" },
    });
    jokes.push({ joke: response.data.joke, id: uuidv4(), votes: 0 });
  }
  return jokes;
}

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BASE_API_URL = "https://icanhazdadjoke.com/";

export async function loadJokes(numJokes, seenJokes) {
  let jokes = [];
  while (jokes.length < numJokes) {
    const response = await axios.get(BASE_API_URL, {
      headers: { accept: "application/json" },
    });
    const { joke } = response.data;
    if (!seenJokes.has(joke)) {
      jokes.push({ joke, id: uuidv4(), votes: 0 });
    } else {
      console.log("FOUND A DUPLICATE!");
      console.log(joke);
    }
  }
  return jokes;
}

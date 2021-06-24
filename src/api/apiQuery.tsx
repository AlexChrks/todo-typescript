import axios from 'axios';

export async function apiQuery() {
  return await axios.get("https://jsonplaceholder.typicode.com/todos");
}
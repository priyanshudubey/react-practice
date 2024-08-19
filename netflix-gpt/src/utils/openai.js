import { GEMINI_KEY } from "./constants";
import { CohereClient } from "cohere-ai";

const client = new CohereClient({
  token: GEMINI_KEY,
});

export default client;

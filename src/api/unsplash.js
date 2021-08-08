import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9rAfxcGAIvzhSviskTEpk4z3S9YdzYhN8214j9wYbtU",
  },
});

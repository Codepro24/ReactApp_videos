import axios from "axios";

const KEY = "AIzaSyB5VW2vYOse3GaQZcHb2GiXkjmqosWeD-o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 5,
    key: KEY,
  },
});

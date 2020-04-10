import axios from "axios";

const API = axios.create({
  baseURL: "https://gamestore123.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async signup(newUser) {
    const response = await API.post("/auth/signup", {
      ...newUser,
    });
    return response.data;
  },
  async login(user) {
    const response = await API.post("/auth/login", {
      ...user,
    });
    return response.data;
  },
  async getAllGames() {
    const response = await API.get("/games", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return response.data;
  },
  async getGamesByCategory(category) {
    const response = await API.post(
      "/search",
      {
        search: category
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  },
  async getUser(userId) {
    const response = await API.get(`/users/${userId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    return response.data;
  },
};

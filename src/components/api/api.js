import axios from "axios"

const api = axios.create({
  baseUrl: "https://my-json-server.typicode.com/tractian/fake-api",
})

export default api

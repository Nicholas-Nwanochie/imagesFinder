import axios from "axios";


export default axios.create({
    baseURL:"https://api.unsplash.com/",
  headers: {
       Authorization: "Client-ID RE-7EKZOeLSJmZlh4CKKX9FBm-lH4WsUTW_RKCWnbrY",
     },
})
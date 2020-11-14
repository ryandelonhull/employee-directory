import react from "react";
import axios from "axios";

export default axios.create({
    basURL: `https://randomuser.me/api/`,
    responseType: "json"
});


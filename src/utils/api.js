import axios from "axios";

export default {
    getRandos: function() {
        return axios.get("https://randomuser.me/api/?results=15")
    }
};


import react from "react";
import axios from "axios";

export default {
    getRandos: function() {
        axios.get("https://randomuser.me/api/?results=15"
        ).then(response => )
    }
};


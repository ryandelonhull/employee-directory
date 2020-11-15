import React, {Component} from "react";
import API from "../utils/api"
import NavBar from "./NavBar.js";

export default class Data extends Component{
    state = {
        users: [{}],
        filteredUsers: [{}],
        order: "descent"
    };

    sortColumn = (heading) => {
        if (this.state.order === "descent") {
            this.setState({order: "ascent"});
        } else {
            this.setState({order: "descent"});
        };

        function compareFunc (a, b) {
            if (this.state.order === "ascent") {
                if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                  } else {
                    return a[heading] - b[heading];
                  }   
            } else{
                if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                  } else {
                    return b[heading] - a[heading];
                  }  
            }
        }

        const sortedUsers = this.state.filteredUsers.sort(compareFunc);
        this.setState({filteredUsers:sortedUsers})

    };

    componentDidMount() {
        API.getRandos().then(results => {
            this.setState({
                users:results.data.results,
                filteredUsers:results.data.results
            });
        });
    };

    searchRandos (event) {
        const filter = event.target.value;
        const filterRandos = this.state.users.filter(item => {
            let values = object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({filteredUsers:filterRandos});
    };
    
    render() {
        return (
            <NavBar searchRandos = {this.searchRandos}/>
        );
    };
};   






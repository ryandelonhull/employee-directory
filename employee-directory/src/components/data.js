import React, {Component} from "react";
import API from "../utils/api"
import NavBar from "./NavBar.js";
import RandoTable from "./RandoTable.js";
// import TableRow from "./TableRow";

export default class Data extends Component{
    
    state = {
        users: [{}],
        filteredUsers: [{}],
        order: "descent"
    };

    constructor(props){

        super(props);

        

        this.sortColumnX =  this.sortColumn.bind(this);

    }


    sortColumn = (heading) =>{
        

        if (this.state.order === "descent") {
            this.setState({order: "ascent"}, ()=>{
                const sortedUsers = this.state.filteredUsers.sort(compareFunc);
                this.setState({filteredUsers: sortedUsers})
            });
        } else {
            this.setState({order: "descent"}, ()=>{
                const sortedUsers = this.state.filteredUsers.sort(compareFunc);
                this.setState({filteredUsers: sortedUsers})
            });
        };

        let self = this;
        function compareFunc (a, b) {
            if (self.state.order === "ascent") {
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

       

    };

    componentDidMount() {
        API.getRandos().then(results => {
            // console.log(results.data.results);
            this.setState({
                users:results.data.results,
                filteredUsers: results.data.results
            });
            // console.log(results.data.results);
        });
    };

    searchRandos = (event) =>{
        const filter = event.target.value;
        const filterRandos = this.state.users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({filteredUsers: filterRandos});
    };
    
   
    render() {
        let sortColumn = this.sortColumn;
        return (
            <div>
                <NavBar searchRandos = {this.searchRandos}/>
                <div>
                <RandoTable
                    users={this.state.filteredUsers}
                    sortColumn={(header)=>sortColumn(header)}
                />
                </div>
            </div>
        );
    };

};   






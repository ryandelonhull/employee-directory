import React, { Component } from "react";



function navBar ({searchRandos}) {
    return (
       
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Rando Commandos</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" onChange={e => searchRandos(e)} type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </div>
      
    )
}

export default navBar;

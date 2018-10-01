import React, { Component } from "react";

import Usercount from "./usercount";
import FloorWiseHeatmap from "./floorwiseHeatmap";
import FullHeatMap from "./allfloorHeatmap";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercount: "...",
            spotcount: "...",
            refferal: [],
            floorwisecount: [],
            firstrow: true,
            onload: true,
            floorwisedata: [],
            floorno: "",
            mostDenFloor: [],
            mostDenLoc: [],
            location: "",
            cratlist: [],
            pollcount: [],
            quecount:[],
            reffcount: [],
            users:[],
        };
    }
    componentWillMount() {
        fetch("/api/alluserdetail", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
                .then(res => res.json())
                .then(json => {
                    var count = 0,
                            spotcount = 0;
                    json.result.map(obj => {
                        count += obj.userCount;
                    });
                    json.spotcount.map(obj => {
                        spotcount += obj.userCount;
                    });
                    this.setState({
                        ...this.state,
                        usercount: count,
                        spotcount: spotcount,
                        refferal: json.refferal,
                        floorwisecount: json.result,
                        mostDenFloor: json.mostDenFloor,
                        mostDenLoc: json.mostDenLoc
                    });
                });
        fetch("/api/homedetail", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        ...this.state,
                        cratlist: json.cartlist,
                        pollcount: json.pollcount,
                        quecount: json.quecount,
                        reffcount: json.reffcount,
                        users: json.userEngaement
                    });
                });
    }
    floorwiseData(floorno) {
        if (floorno !== "") {
            fetch(`/api/floorwsie/${floorno}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                    .then(res => res.json())
                    .then(json => {
                        json.result.sort(function (a, b) {
                            var x = a["userCount"];
                            var y = b["userCount"];
                            return y < x ? -1 : y < x ? 0 : 1;
                        });
                        this.setState({
                            ...this.state,
                            showGraph: "db",
                            floorno: floorno,
                            floorwisedata: json.result,
                            onload: false,
                            location: ""
                        });
                    });
        } else {
            this.setState({onload: true});
        }
    }
    renderListButton() {
        var template = this.state.floorwisecount.map((option, i) => {
            return (
                    <li className={`list-group-item`} key={i}>
                        <span className="badge">{option.userCount}</span>
                        <button
                            onClick={() => {
                            this.floorwiseData(option.floorno);
                                                    }}
                            className="btn btn-success btn-xs"
                            >
                            {option.floorno} <sup>th</sup>
                            Floor
                        </button>{" "}
                    </li>
                        );
        });
        return template;
    }
    placeCartHandler() {
        this.state.floorno;
        this.state.location;
        this.refs.cartno.value;

        if (this.state.location !== "" && this.refs.cartno.value !== "") {
            fetch(`/api/placecart`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    floorno: this.state.floorno,
                    projectname: this.state.location,
                    cartname: this.refs.cartno.value,
                    lid: this.state.lid
                })
            })
                    .then(res => res.json())
                    .then(json => {
                    });
        }
    }
    cartlist() {
        var template = this.state.cratlist.map((option, i) => {
            return (
                    <li className={`list-group-item`} key={i}>
                        {option.cartName[0]} at
                        <b>
                            {" "}
                            {option.fno} <sup>th</sup> Floor{" "}
                        </b>
                    </li>
                    );
        });
        return template;
    }
    render() {
        return (
                <div>
                    <div className="row">
                        {(() => {
                                        if (this.state.firstrow) {
                                            return (
                                                    <div>
                                                        <Usercount
                                                            bardata={this.state.floorwisecount}
                                                            floorwise={obj => this.floorwiseData(obj)}
                                                            usercount={this.state.usercount}
                                                            refferal={this.state.refferal}
                                                            spotcount={this.state.spotcount}
                                                            mostDenFloor={this.state.mostDenFloor}
                                                            mostDenLoc={this.state.mostDenLoc}
                                                            pollcount= {this.state.pollcount}
                                                            quecount={this.state.quecount}
                                                            reffcount= {this.state.reffcount}
                                                            users={this.state.users}
                                                            
                                                            
                                                            />
                                            
                                                        <div>
                                                            <div className="col-md-12 admin-allbox">
                                                                <div className="panel panel-default">
                                                                    <div className="panel-heading">
                                                                        <b>Heat Map</b>
                                                                    </div>
                                                                    <div className="panel-body">
                                                                        <div className="col-md-2">
                                                                            <ul className="list-group">
                                                                                {(() => this.renderListButton())()}
                                            
                                                                                <li className={`list-group-item`}>
                                                                                    <button
                                                                                        onClick={() => {
                                                            this.floorwiseData("");
                                                                                                                          }}
                                                                                        className="btn btn-success btn-xs"
                                                                                        >
                                                                                        All Floor
                                                                                    </button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <div className="chart-container">
                                                                                {(() => {
                                                                                                    if (this.state.onload) {
                                                                                                        return (
                                                                                                        <FullHeatMap
                                                                                                            bardata={this.state.floorwisecount}
                                                                                                            gropupdata={this.state.floorwisecount}
                                                                                                            ongridclick={fn => {
                                                                                                                            this.floorwiseData(fn);
                                                                                                            }}
                                                                                                            />
                                                                                                                                    );
                                                                                } else {
                                                                                                                                return (
                                                                                                                                <FloorWiseHeatmap
                                                                                                                                    floorno={this.state.floorno}
                                                                                                                                    floorwisedata={this.state.floorwisedata}
                                                                                                                                    setcartloc={(blockid, lid) => {
                                                                                                                                        this.setState({
                                                                                                                                            ...this.state,
                                                                                                                                            location: blockid,
                                                                                                                                            lid: lid
                                                                                                                                    });
                                                                                                                                    }}
                                                                                                                                    />
                                                                                                                                            );
                                                                                }
                                                                                })()}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-2">
                                                                            {
                                                                                                                                    (() => {
                                                                                                                                        if (this.state.cratlist.length > 0) {
                                                                                                                                            return (
                                                                                                                                                <div>
                                                                                                                                                    <div>
                                                                                                                                                        <b>Cart Location</b>
                                                                                                                                                    </div>
                                                                                                                                                    <div className="panel-body">
                                                                                                                                                        {(() => this.cartlist())()}
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                    );
                                                                            }
                                                                            })()}
                                            
                                                                            {
                                                                                                                                            (() => {
                                                                                                                                                if (
                                                                                                                                                        !this.state.onload &&
                                                                                                                                                        this.state.location !== ""
                                                                                                                                                        ) {
                                                                                                                                                    return (
                                                                                                                                                        <div className="panel panel-default">
                                                                                                                                                            <div className="panel-heading">
                                                                                                                                                                <b>Place Cart at Location</b>
                                                                                                                                                            </div>
                                                                                                                                                            <div className="panel-body">
                                                                                                                                                                <div className="form-group">
                                                                                                                                                                    <b>
                                                                                                                                                                        {" "}
                                                                                                                                                                        {`${this.state.floorno} Floor `}{" "}
                                                                                                                                                                        {this.state.location}{" "}
                                                                                                                                                                    </b>
                                                                                                                                                                </div>
                                                                                                                        
                                                                                                                                                                <div className="form-group">
                                                                                                                                                                    <label htmlFor="restore-email">
                                                                                                                                                                        <b>Cart Number</b>
                                                                                                                                                                    </label>
                                                                                                                                                                    <input
                                                                                                                                                                        className="form-control"
                                                                                                                                                                        type="text"
                                                                                                                                                                        size="20"
                                                                                                                                                                        ref="cartno"
                                                                                                                                                                        minLength="9"
                                                                                                                                                                        maxLength="10"
                                                                                                                                                                        placeholder="Cart No!"
                                                                                                                                                                        />
                                                                                                                                                                </div>
                                                                                                                                                                <div className="form-group">
                                                                                                                                                                    <input
                                                                                                                                                                        type="button"
                                                                                                                                                                        onClick={() => {
                                                                                                                                                                this.placeCartHandler();
                                                                                                                                                                                                                                                                                          }}
                                                                                                                                                                        className="btn btn-primary"
                                                                                                                                                                        value="Place cart"
                                                                                                                                                                        />
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                                );
                                                                            }
                                                                            })()}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                                                                            );
                        }
                        })()}
                    </div>
                </div>
                                                                                        );
                                }
                            }

                            export default Index;

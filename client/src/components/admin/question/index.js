import React, { Component } from 'react';

import CreatePoll from "./createpoll";
import CreateQuiz from "./createquiz";
import PollList from "./list";


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pollshow: "dn",
            quizshow: "dn"
        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    
    sendNotification(){
        
        fetch('/api/notifytoall', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            }).then(res => res.json()).then(json => {

                if (json.data === 'sent') {
                    this.setState({...this.state, "notifymessage": "db"}, () => {
                        setTimeout(() => {
                            this.setState({...this.state, "notifymessage": "dn"});
                        }, 4000)
                    }
                    );
                }

            });
        
    }
    
    render() {
        return (
                <div className="user-panel">
                    <div className="container">
                        <div>
                            <h1>Create Question!!! </h1>
                        </div>
                        <input type="button" onClick={()=>{this.sendNotification()}} value ="Send Notification to all "/>
                        <div className="row">
                            <div className="col-md-6"> 
                                <label>Select Question:</label> 
                                <select className="form-control selectpicker" 
                                        onChange={(event) => {
                        if (event.target.value === "poll") {
                            this.setState({"pollshow": "db", "quizshow": "dn"});
                                        } else if(event.target.value === "quiz"){
                                                            this.setState({"quizshow": "db", "pollshow": "dn"});
                                        } else {
                                                                    this.setState({"quizshow": "dn", "pollshow": "dn"});              
                                        }
                                        }}    
                                        > 
                                        <option>Select one</option>
                                    <option value="poll">Poll</option>
                                    <option value="quiz">Quiz</option>
                                </select>
                                <hr/>
                
                            </div>
                        </div>
                        <div className={
                                                `row ${this.state.quizshow}`}>
                            <CreateQuiz />
                        </div>
                
                        <div className={`row ${this.state.pollshow}`}>
                            <CreatePoll/>
                        </div>
                        <div>
                            <h1> Listing !!! </h1>
                        </div>
                        <div className="row">
                            <PollList admin="true" />
                        </div>
                
                    </div>
                </div>
                
                
                

                                            );
                }
            }

            export default Index;

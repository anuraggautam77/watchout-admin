import React, { Component }
from 'react';
class Usercount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usercount: props.usercount,
            spotcount: props.spotcount,
            refferal: props.refferal,
            mostDenFloor: props.mostDenFloor,
            mostDenLoc: props.mostDenLoc,
            pollcount: props.pollcount,
            quecount: props.quecount,
            reffcount: props.reffcount,
            users: props.users
        };
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceiveProps(props) {
        this.setState({usercount: props.usercount, mostDenFloor: props.mostDenFloor,
            mostDenLoc: props.mostDenLoc,
            refferal: props.refferal,
            spotcount: props.spotcount,
            pollcount: props.pollcount,
            quecount: props.quecount,
            reffcount: props.reffcount,
            users: props.users
        })
    }
    refferalcode() {

        var template = this.state.refferal.map((option, i) => {
            return (
                    <li className={`list-group-item`}  key={i}>  
                        <strong>{option.name}'s</strong>  ref code <b>{option.code}</b>  <span className="badge" >{option.userCount}</span> 
                    </li>);
        });
        return template;
    }
    render() {
        console.log(this.state)
        return (
                <div>
                    <div className="col-md-2">
                
                        <div className="small-box colorone">
                            <div className="inner">
                                <h2>{this.state.usercount}</h2>
                                <h4>User Registrations</h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-user"></i>
                            </div>
                            <a href="#" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                
                    </div> 
                    <div className="col-md-2">
                
                        <div className="small-box colorfive">
                            <div className="inner">
                             
                             {
                             (()=>{
                                if(this.state.reffcount.length>0){
                                    return (<h2>{this.state.reffcount[0].usercount}</h2>)   
                                }
                                 
                             })()
                                
                              }
                             
                                <h4>Total Referrals </h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-share"></i>
                            </div>   
                
                            <a href="#" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                
                    <div className="col-md-2">
                
                        <div className="small-box colorsix">
                            <div className="inner">
                               {
                             (()=>{
                                if(this.state.quecount.length>0){
                                    return (<h2>{this.state.quecount[0].count}</h2>)   
                                }
                                 
                             })()
                                
                              }
                
                            <h4> Quiz Published</h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-tasks"></i>
                            </div>   
                
                            <a href="#" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                
                        <div className="small-box colorfour">
                            <div className="inner">
                                {
                             (()=>{
                                if(this.state.pollcount.length>0){
                                    return (<h2>{this.state.pollcount[0].count}</h2>)   
                                }
                                 
                             })()
                                
                              }
                                <h4>Poll Published </h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-tasks"></i>
                            </div>   
                
                            <a href="#" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                    <div className="col-md-2">
                
                        <div className="small-box colorthree">
                            <div className="inner">
                               {
                             (()=>{
                                if((this.state.pollcount.length>0) || (this.state.quecount.length>0)){
                                    return (<h2>{this.state.pollcount[0].usercount+ this.state.quecount[0].usercount}</h2>)   
                                }
                                 
                             })()
                                
                              }
                                <h4> User Engagement </h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-eye-open"></i>
                            </div>   
                
                            <a href="#" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                    <div className="col-md-2">
                
                        <div className="small-box colortwo">
                            <div className="inner">
                                <h2>{this.state.spotcount}</h2>
                                <h4>Spot Registrations</h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-user"></i>
                            </div>   
                
                            <a href="#" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                
                
                
                    </div>
                
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Refferal Code </b></div>
                            <div className="panel-body text-center">
                                {  (() => this.refferalcode())() }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"><b>Density Wise</b></div>
                            <div className="panel-body">
                                {

                                    (() => {
                                        if (this.state.mostDenFloor.length > 0) {
                                            return  (
                                                            <li className={`list-group-item`}   >  
                                                                <b> By Floor: </b>{`${this.state.mostDenFloor[0].fn} Floor , Count:${this.state.mostDenFloor[0].userCount}`}
                                                            </li>

                                                    )
                                }
                                }) ()   
                
                                }
                
                
                                {
                            (() => {
                                                if (this.state.mostDenLoc.length > 0) {
                                                    return  (
                                                                    <li className={`list-group-item`}   >  
                                                                        <b> By Location : </b>{`${this.state.mostDenLoc[0].blockname} of ${this.state.mostDenLoc[0].loc.split('-')[0]} , Count: ${this.state.mostDenLoc[0].userCount}`} 
                                                                    </li>
                                            )
                                }
                                })()     
                
                                }
                
                            </div>
                        </div>
                    </div>
                
                </div>



                        );
    }
}

export default Usercount;

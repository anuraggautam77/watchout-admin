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
            users: props.users,
            rescentuserlist: props.rescentuserlist
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
            users: props.users,
            rescentuserlist: props.rescentuserlist
        })
    }
    refferalcode() {

        var template = this.state.refferal.map((option, i) => {
            return (
                    <li className="item" key={i}>
                        <div className="product-img">
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <div className="product-info">
                            <span className="product-description">
                                <strong>{option.name}'s</strong>  ref code <b>{option.code}</b>  <span className="badge pull-right">{option.userCount}</span>
                            </span>
                        </div>
                    
                    </li>);
        });
        return template;
    }
    userlisting() {
        var template = this.state.rescentuserlist.map((option, i) => {
            return (
                    <li className="item" key={i}>
                        <div className="product-img">
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <div className="product-info">
                            <span className="product-description">
                                <b> {option.name} </b> from  {option.lid.split("-")[0]}loor, <b>{option.projectname}</b>
                            </span>
                        </div>
                    </li>


                    );
        });
        return template;


    }
    render() {
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
                            <a href="javascript:void(0)" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                
                    </div> 
                    <div className="col-md-2">
                
                        <div className="small-box colorfive">
                            <div className="inner">
                
                                {
                                    (() => {
                                        if (this.state.reffcount.length > 0) {
                                            return (<h2>{this.state.reffcount[0].usercount}</h2>)
                                }
                
                                })()
                
                                }
                
                                <h4>Total Referrals </h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-share"></i>
                            </div>   
                
                            <a href="javascript:void(0)" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                
                    <div className="col-md-2">
                
                        <div className="small-box colorsix">
                            <div className="inner">
                                {
                                            (() => {
                                                if (this.state.quecount.length > 0) {
                                                    return (<h2>{this.state.quecount[0].count}</h2>)
                                }
                
                                })()
                
                                }
                
                                <h4> Quiz Published</h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-tasks"></i>
                            </div>   
                
                            <a href="javascript:void(0)" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                
                        <div className="small-box colorfour">
                            <div className="inner">
                                {
                                                    (() => {
                                                        if (this.state.pollcount.length > 0) {
                                                            return (<h2>{this.state.pollcount[0].count}</h2>)
                                }
                
                                })()
                
                                }
                                <h4>Poll Published </h4>
                            </div>
                            <div className="icon">
                                <i className="icon-bar-chart"></i>
                            </div>   
                
                            <a href="javascript:void(0)" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                    <div className="col-md-2">
                
                        <div className="small-box colorthree">
                            <div className="inner">
                                {
                                                            (() => {
                                                                if ((this.state.pollcount.length > 0) || (this.state.quecount.length > 0)) {
                                                                    return (<h2>{this.state.pollcount[0].usercount + this.state.quecount[0].usercount}</h2>)
                                }
                
                                })()
                
                                }
                                <h4> User Engagement </h4>
                            </div>
                            <div className="icon">
                                <i className="glyphicon glyphicon-eye-open"></i>
                            </div>   
                
                            <a href="javascript:void(0)" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                    <div className="col-md-2">
                        <div className="small-box colortwo">
                            <div className="inner">
                                <h2>{
                                                                        this.state.spotcount}</h2>
                                <h4>Spot Registrations</h4>
                            </div>
                            <div className="icon">
                                <i className="icon-signin"></i>
                            </div>   
                
                            <a href="javascript:void(0)" className="small-box-footer">&nbsp; <i className="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                
                
                
                
                
                    <div className="col-md-4">         
                
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Recently registered users</h3>
                            </div>
                
                            <div className="box-body" style={{"overflowY":"scroll", "height":"100px"}}>
                                <ul className="products-list product-list-in-box">
                                    {  (() => this.userlisting())() }
                                </ul>
                            </div>
                            <div className="box-footer text-center">
                            </div>
                        </div>
                    </div>            
                    <div className="col-md-4">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Refferal Code</h3>
                            </div>
                
                            <div className="box-body">
                                <ul className="products-list product-list-in-box">
                                    {  (() => this.refferalcode())() }
                                </ul>
                            </div>
                        </div>                  
                    </div>
                
                    <div className="col-md-4">
                
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Density Wise</h3>
                            </div>
                
                            <div className="box-body">
                                <ul className="products-list product-list-in-box">
                                    {

                                                                        (() => {
                                                                            if (this.state.mostDenFloor.length > 0) {
                                                                                return  (
                                                                            <li className="item">
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
                                                                                    <li className="item">
                                                                                        <b> By Location : </b>{`${this.state.mostDenLoc[0].blockname} of ${this.state.mostDenLoc[0].loc.split('-')[0]} , Count: ${this.state.mostDenLoc[0].userCount}`} 
                                                                                    </li>
                                                                                                )
                                    }
                                    })()     
                
                                    }
                                </ul>
                            </div>
                        </div>
                
                
                
                    </div>
                </div>



                                                        );
    }
}

export default Usercount;

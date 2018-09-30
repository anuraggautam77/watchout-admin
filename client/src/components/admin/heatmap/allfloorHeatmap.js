import React, { Component } from "react";
class FullHeatMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bardata: props.gropupdata,
            bardatalisting: props.bardata,
            matrix: []
        };

        this.color = [
            "brown-tone",
            "slightly-blue",
            "moderate-orange",
            "bright-orange",
            "vivid-orange"
        ];
    }
    componentWillMount() {
        this.setState({...this.state, matrix: []});
    }
    componentWillReceiveProps(props) {
        props.gropupdata.map((obj, i) => {
            if (this.color[i] === undefined) {
                obj.color = this.color[this.color.length - 1];
            } else {
                obj.color = this.color[i];
            }
        });

        this.setState(
                {bardata: props.gropupdata, bardatalisting: props.bardata},
                () => {
            this.collectGraphdata();
        }
        );
    }
    collectGraphdata() {
        this.setState({
            matrix: this.generateSquareMatrix(3, 2, this.state.bardata)
        });
    }
    generateSquareMatrix(num, init, groupdata) {
        var arr = [],
                row,
                col;
        var i = init;

        for (row = 0; row < num; row++) {
            arr[row] = [];
            for (col = 0; col < num; col++) {
                let usercount = 0;
                let cartcount = 0;
                let color = this.color[this.color.length - 1];

                if (i > 3) {
                    groupdata.map((obj, index) => {
                        if (obj.floorno === i) {
                            usercount = obj.userCount;
                            color = obj.color;
                            cartcount = obj.cartCount;

                        }
                    });
                    arr[row][col] = [`Floor-${i}`, usercount, color, cartcount];
                } else {
                    arr[row][col] = [`Floor-${i}`];
                }

                i++;
            }
        }
        return arr;
    }
    checkstatus(rid, cid, bid, col) {
        if (bid <= 3) {
            return `recall-grid-tile cross-disable`;
        } else {
            return `recall-grid-tile ${col[2]}`;
        }
    }
    gridClickHandler(florno) {
        this.props.ongridclick(florno.split("-")[1]);
    }
    drawgrid() {
        let blockid = 1;
        const template = this.state.matrix.map((row, rowIdx) => {
            return (
                    <div key={rowIdx} className="recall-grid-row">
                        {row.map((col, colIdx) => {
                                        blockid++;
                                        return (
                                                        <div
                                                            key={colIdx}
                                                            blockid={col[0]}
                                                            className={this.checkstatus(rowIdx, colIdx, blockid, col)}
                                                            onClick={e => {
                                                                this.gridClickHandler(col[0]);
                                                                    }}
                                                            >
                                                            <div>
                                                                {(() => {
                                                                                if (col.length === 1) {
                                                                                        return <span> {col[0]} </span>;
                                                                } else {
                                                                                                return (
                                                                                                                        <span>
                                                                                                                            {" "}
                                                                                                                            {col[0]}
                                                                                                                            <h5> User Count:{col[1]}</h5>
                                                                                                                            { (() => {
                                                                                                                                                if (col[3] > 0 && col[3] !== undefined) {
                                                                                                                                                    return (<h4><img src="/img/cart.png" style={{"marginTop": "-24px"}}/>{col[3]}</h4>)
                                                                                                                            }
                                                                                                                            })()
                                                                                                            
                                                                                                                            }      
                                                                                                            
                                                                                                            
                                                                                                                        </span>
                                                                                                            );
                                                                }
                                                                })()}
                                                            </div>
                                                        </div>
                                                                            );
                        })}
                    </div>
                                                                    );
                            });
                            return template;
                        }
                        render() {
                            return <div>{this.drawgrid()}</div>;
                        }
                    }

                    export default FullHeatMap;

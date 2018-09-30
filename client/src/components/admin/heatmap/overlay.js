import React, { Component } from "react";
import FloorWiseHeatmap from "./floorwiseHeatmap";
class GraphOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayshow: props.showgraph,
            floorwisedata: props.floorwisedata,
            floorno: props.floorno
        };

        this.chartColors = {};
    }
    componentDidMount() { }
    componentWillReceiveProps(props) {
        this.setState({
            overlayshow: props.showgraph,
            floorwisedata: props.floorwisedata,
            floorno: props.floorno
        });





    }
    render() {
        return (
                <div className={this.state.overlayshow}>
                    <div id="myModal" className="modal">
                        <div className="col-md-6 col-md-push-3 col-sm-12 modal-content">
                            <span className="row close" onClick={() => this.setState({'overlayshow': 'dn'})}>&times;</span>
                            <div className="chart-container"  >
                                {
                                        (() => {
                                            if (this.state.overlayshow === "db") {
                                                return (
                                              <FloorWiseHeatmap floorno= {this.state.floorno} floorwisedata={this.state.floorwisedata} 
                                                    />
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

    export default GraphOverlay;

import React, {Component} from "react";
import "./Spinner.css";

export class Spinner extends Component {
    render() {
        return (
            <div className="spinnerContainer">
                <div className="spinner"/>
            </div>
        );
    }
}

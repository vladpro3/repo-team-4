import React, {Component} from "react";
import "./InlineLoader.css";

export class InlineLoader extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="loader-container__inline-loader"/>
            </div>
        );
    }
}

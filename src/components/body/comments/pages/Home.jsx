import React, {Component} from "react";
import Menu from "../../menu/Menu";

export default class Home extends Component{
    render() {
        document.title = "Home";
        return (
            <div>
                <Menu/>
            </div>
        );
    }
}
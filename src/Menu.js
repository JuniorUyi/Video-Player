import React from "react";

export class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        const text = e.target.value;
        this.props.chooseVideo(text);
    }

    render() {
        return  (
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="fast" /> Fast
                <input type="radio" name="src" value="slow" /> Slow
                <input type="radio" name="src" value="cute" /> Cute
                <input type="radio" name="src" value="eek" /> Eek
            </form>
        );
    }
}
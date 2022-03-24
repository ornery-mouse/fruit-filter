import React, { Component } from "react"

export default class Input extends Component {
    //our input is going to receive the change handler function as a prop
    //the change handler function will affect stat in the parent component
    render() {
        return (
            <div>
                <label>Filter the Fruits</label>
                <input
                    type="text"
                    name="fruit-filter"
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}
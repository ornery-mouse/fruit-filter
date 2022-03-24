import React, { Component } from "react"

export default class List extends Component {
    render() {
        //maps's callback function can automatically get the index with a second parameter
        //in this case f=fruit i=index
        const fruitItems = this.props.fruits.map((f, i) => {
            return <li key={i}>{f}</li>
        })
        return (
            <ul>
                {fruitItems}
            </ul>
        )
    }
}
import React, { Component } from 'react'
import List from './List.js'
import Input from './Input.js'

export default class FruitContainer extends Component {

    state = {
        // initialize the fruit list to the full list passed in props
        fruitsToDisplay: this.props.fruits
    }

    // we need to send a change handler, as a prop, to Input
    // the change handler will set state for FruitContainer(this component)
    // the way we are going to set state is through the built in filter function
    // this is because we need to create a new array of fruits that contain the value of the input
    handleFilterChange = (e) => {
        // set up a filter that removes fruits that dont match the value in the input
        // referring to each fruit as 'f'
        const filteredFruitsList = this.props.fruits.filter((f) => {
            return f.toLowerCase().includes(e.target.value.toLowerCase())
        })
        // then we will set state with the new array of fruits
        // console.log('this is the new list of fruits', filteredFruitsList)
        this.setState({
            fruitsToDisplay: filteredFruitsList
        })
    }

    render () {
        
        return (
            <div>
                <h2>This is Fruit Container</h2>
                <Input onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay} />
            </div>
        )
    }
}
// dont need this line at the bottom if you add export default on class declaration line
// export default FruitContainer
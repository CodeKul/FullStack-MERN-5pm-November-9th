import React, { Component } from 'react';

export default class ClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }


componentWillMount(){
    console.log("Component will Mount")
}

    componentDidMount(){
        console.log("Component Mounted")
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        console.log("Component Updated")
    }

    render() {
        console.log("Component is Mounting")
        return (

            <div>

                <h1>Class Component- Counter Example</h1>

                <h1>Counter : {this.state.count}</h1>

                <button onClick={this.handleIncrement}>Increment +</button>
                <button onClick={this.handleDecrement}>Decrement -</button>
            </div>
        )
    }
}

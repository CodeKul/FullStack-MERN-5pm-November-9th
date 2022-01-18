import React from 'react'

export default class ClassCounter extends React.Component {

    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })

    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })

    }


    componentDidMount() {
        console.log("Component did Mounted")
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(){
        console.log("Component Did updated")
    }


    render() {
        console.log("Component is Mounting")
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>


                <button onClick={this.handleIncrement}>Increment</button>

                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }

}


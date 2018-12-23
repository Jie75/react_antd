import React from "react";

export default class Life extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }
    state = {
        count: 0
    }


    handleAdd = (e) => {
        this.setState({
            count:(++ this.state.count)
        })
    }


    render() {
        return (
            <div>
                <p>this is life of react</p>
                <button style={{ border: '1px solid black' }} onClick={this.handleAdd}>click</button>
                <p>{this.state.count}</p>
            </div>
        )
    }

}
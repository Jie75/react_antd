import React from 'react'
import { generatePath } from 'react-router-dom'
import { Button } from 'antd'


export default class NoMatch extends React.Component {

    state = {
        seconds: 5
    }

    componentDidMount() {
        let timer = setInterval(() => {
            this.setState({
                seconds: (--this.state.seconds < 0 ? 0 : this.state.seconds)
            })
            if (this.state.seconds === 0) {
                console.log('back');
                clearInterval(timer)
            }
        }, 1000);
    }

    

    render() {
        return (
            <div style={{ textAlign: 'center', fontSize: 24 }}>
                the page Not Found!!!
                <Button to="">{this.state.seconds}</Button>
            </div>
        );
    }
}
import React from 'react'
import { Card, Button, Message } from 'antd';


export default class Messages extends React.Component {

    handleOpenMessage = (type) => {
        Message[type]("恭喜")
    }

    render() {
        return (
            <div>
                <Card title="全局message">
                    <Button type="primary" onClick={() => { this.handleOpenMessage('success') }}>success</Button>
                    <Button type="primary" onClick={() => { this.handleOpenMessage('info') }}>info</Button>
                    <Button type="primary" onClick={() => { this.handleOpenMessage('warning') }}>warning</Button>
                    <Button type="primary" onClick={() => { this.handleOpenMessage('error') }}>error</Button>
                </Card>
            </div>
        );
    }
}
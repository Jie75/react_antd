import React from 'react'
import { Card, Button, notification } from 'antd';


export default class Notifications extends React.Component {

    handleOpenNotification = (type, position) => {
        if (position) {
            notification.config({
                placement: position
            })
        }
        notification[type]({
            message: '发工资了',
            description: '10月发了2200'
        })
    }


    render() {
        return (
            <div>
                <Card title="通知框">
                    <Button type="primary" onClick={() => { this.handleOpenNotification('success') }}>success</Button>
                    <Button type="primary" onClick={() => { this.handleOpenNotification('info') }}>info</Button>
                    <Button type="primary" onClick={() => { this.handleOpenNotification('warning') }}>warning</Button>
                    <Button type="primary" onClick={() => { this.handleOpenNotification('error') }}>error</Button>
                </Card>
                <Card title="通知框">
                    <Button type="primary" onClick={() => { this.handleOpenNotification('success', 'topLeft') }}>left-top</Button>
                    <Button type="primary" onClick={() => { this.handleOpenNotification('info', 'topRight') }}>left-bottom</Button>
                    <Button type="primary" onClick={() => { this.handleOpenNotification('warning', 'bottomLeft') }}>right-top</Button>
                    <Button type="primary" onClick={() => { this.handleOpenNotification('error', 'bottomRight') }}>right-bottom</Button>
                </Card>
            </div>
        );
    }
}
import React from 'react'
import { Card, Modal, Button } from 'antd'

import './index.less'


export default class Modals extends React.Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }


    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title:'sure?',
            content:'this si confirm',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel');
            }
        })
    }

    render() {
        return (
            <div>
                <Card title="基础模态框">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>custom footer</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>top 20px</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>open</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>welcome learn React</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="确定"
                    cancelText="取消"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>welcome learn React</p>
                </Modal>
                <Modal
                    style={{ top: '20px' }}
                    title="React"
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>welcome learn React</p>
                </Modal>
                <Modal
                    wrapClassName="vertical-center"
                    title="React"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>welcome learn React</p>
                </Modal>
                <Card title="信息确认框">
                    <Button onClick={() => this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type="ghost" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="danger" onClick={() => this.handleConfirm('warning')}>warning</Button>
                </Card>
            </div>
        );
    }
}
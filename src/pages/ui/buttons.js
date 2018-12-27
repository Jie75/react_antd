import React from 'react';
import { Card, Button, Icon, Radio } from 'antd';

import './index.less'

const ButtonGroup = Button.Group

export default class Buttons extends React.Component {

    state = {
        showLoading: true,
        btnSize: 'default'
    }

    handleToggleLoading = () => {
        this.setState({
            showLoading: (!this.state.showLoading)
        })
    }
    handleChange = (e) => {
        this.setState({
            btnSize: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title="base button">
                    <Button type="primary">eNet</Button>
                    <Button >eNet</Button>
                    <Button type="dashed">eNet</Button>
                    <Button type="danger">eNet</Button>
                    <Button disabled>eNet</Button>
                </Card>
                <Card title="icon button">
                    <Button icon="plus">create</Button>
                    <Button icon="edit">edit</Button>
                    <Button icon="delete">delete</Button>
                    <Button icon="search"></Button>
                    <Button icon="search">search</Button>
                    <Button icon="download">download</Button>
                </Card>
                <Card title="loading button">
                    <Button type="primary" loading={this.state.showLoading}>sure</Button>
                    <Button type="primary" shape="circle" loading={this.state.showLoading}></Button>
                    <Button loading={this.state.showLoading}>click loading</Button>
                    <Button shape="circle-outline" loading={this.state.showLoading}></Button>
                    <Button type="primary" onClick={this.handleToggleLoading}>toggle</Button>
                </Card>
                <Card title="button group" className="buttonGroup">
                    <ButtonGroup>
                        <Button type="primary" >
                            <Icon type="left" />left</Button>
                        <Button type="primary" >
                            right<Icon type="right" /></Button>
                    </ButtonGroup>
                </Card>
                <Card title="button size">
                    <Radio.Group value={this.state.btnSize} onChange={this.handleChange}>
                        <Radio value="small">small</Radio>
                        <Radio value="default">default</Radio>
                        <Radio value="large">large</Radio>
                    </Radio.Group>
                    <Button size={this.state.btnSize}>small</Button>
                    <Button size={this.state.btnSize}>default</Button>
                    <Button size={this.state.btnSize}>large</Button>
                </Card>
            </div>
        );
    }
}
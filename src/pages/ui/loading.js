import React from 'react'
import { Card, Button, Spin, Icon, Alert } from "antd";

export default class Loadings extends React.Component {


    render() {
        return (
            <div>
                <Card title="Spin用法" calssName="">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin indicator={<Icon type="loading" />} />
                </Card>
                <Card title="内容遮罩">
                    <Spin>
                        <Alert
                            type="info"
                            message="welcome"
                            description="description"
                        ></Alert>
                    </Spin>
                    <Spin tip="loading...">
                        <Alert
                            type="warning"
                            message="welcome"
                            description="description"
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        );
    }
}
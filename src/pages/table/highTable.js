import React from 'react'
import { Card, Table, Badge, Button, Modal, message } from 'antd';
import Axios from '../../axios';
import utils from '../../utils/utils';

export default class HightTable extends React.Component {

    state = {}

    componentWillMount() {
        this.request();
        this.request1();
    }

    params = {
        page: 1
    }

    handleDelete = (item) => {

        Modal.confirm({
            title: 'sure?',
            content: '确定删除?',
            onOk: () => {
                message.success(`删除数据${item.id}成功`)
            }
        })
    }

    request = () => {
        let self = this;
        let url = "/table/list"
        Axios.ajax(
            {
                url: url,
                data: {
                    params: {
                        page: this.params.page
                    }
                }
            }
        ).then(res => {
            this.setState({
                dataSource1: res.list,
                pagination: utils.pagination(res, (current) => {
                    self.params.page = current;
                    self.request();
                })
            })
        })
    }
    request1 = () => {
        let self = this;
        let url = "/table/highTable"
        Axios.ajax(
            {
                url: url,
                data: {
                    params: {
                        page: this.params.page
                    }
                }
            }
        ).then(res => {
            this.setState({
                dataSource1: res.list,
                pagination: utils.pagination(res, (current) => {
                    self.params.page = current;
                    self.request();
                })
            })
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                width: 100,
                dataIndex: 'id',
                sorter: (a, b) => a.id - b.id
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width: 100,
                dataIndex: 'sex',
                render(sex) {
                    const arr = ['男', '女']
                    return arr[(sex - 1)]
                }
            },
            {
                title: '状态',
                width: 100,
                dataIndex: 'state',
                render(state) {
                    return state === 0 ?
                        <Badge status="default" text="offline" /> :
                        <Badge status="success" text="online" />
                }
            },
            {
                title: '生日',
                width: 100,
                dataIndex: 'birthday'
            },
            {
                title: '操作',
                width: 100,
                render: (text, item) => {
                    return <Button size="small" onClick={() => { this.handleDelete(item) }}>删除</Button>
                }
            }
        ]
        const cloumns1 = [
            {
                title: 'id',
                width: 100,
                fixed: 'left',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '用户名',
                width: 100,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width: 100,
                dataIndex: 'sex',
                render(sex) {
                    const arr = ['男', '女']
                    return arr[(sex - 1)]
                }
            },
            {
                title: '状态',
                width: 100,
                dataIndex: 'state',
                render(state) {
                    return state === 0 ?
                        <span style={{ color: 'gray' }}>离线</span> :
                        <span style={{ color: 'green' }}>在线</span>
                }
            },
            {
                title: '生日',
                width: 100,
                fixed: 'right',
                dataIndex: 'birthday'
            }
        ]
        return (
            <div>
                <Card title="y_scroll 表格">
                    <Table
                        bordered
                        scroll={{ y: 240 }}
                        dataSource={this.state.dataSource1}
                        columns={columns}
                        pagination={this.state.pagination}
                    />
                </Card>
                <Card title="x_scroll 表格" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        scroll={{ x: 1200 }}
                        dataSource={this.state.dataSource1}
                        columns={cloumns1}
                        pagination={this.state.pagination}
                    />
                </Card>
                <Card title="排序">
                    <Table
                        bordered
                        scroll={{ y: 240 }}
                        dataSource={this.state.dataSource1}
                        columns={columns}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}
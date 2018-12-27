import React from 'react'
import { Card, Table } from 'antd';
import Axios from '../../axios';
import utils from '../../utils/utils';


export default class BasicTable extends React.Component {

    componentWillMount() {
        const dataSource = [
            {
                id: '0',
                userName: 'jack',
                sex: '1',
                state: '1',
                birthday: '2000-01-01'
            },
            {
                id: '0',
                userName: 'jack',
                sex: '1',
                state: '1',
                birthday: '2000-01-01'
            },
            {
                id: '0',
                userName: 'jack',
                sex: '1',
                state: '1',
                birthday: '2000-01-01'
            },
            {
                id: '0',
                userName: 'jack',
                sex: '1',
                state: '1',
                birthday: '2000-01-01'
            },
        ]
        this.setState({
            dataSource
        })
        this.request();
    }

    params = {
        page: 1
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
    onRowClick = (record, index) => {
        let selectKey = [index]
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    const arr = ['男', '女']
                    return arr[(sex - 1)]
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    return state === 0 ?
                        <span style={{ color: 'gray' }}>离线</span> :
                        <span style={{ color: 'green' }}>在线</span>
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            }
        ]
        const { selectedRowKeys } = this.state;
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        // pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns}
                    />
                </Card>
                <Card title="动态数据表格">
                    <Table
                        bordered
                        // pagination={false}
                        dataSource={this.state.dataSource1}
                        columns={columns}
                    />
                </Card>
                <Card title="Mock-单选">
                    <Table
                        bordered
                        rowSelection={{
                            type: 'radio',
                            selectedRowKeys
                        }}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                }
                            }
                        }}
                        dataSource={this.state.dataSource1}
                        columns={columns}
                    />
                </Card>
                <Card title="Mock-多选">
                    <Table
                        bordered
                        rowSelection={{
                            type: 'checked',
                            selectedRowKeys,
                            onChange: (selectedRowKeys, selectedItem) => {
                                this.setState({
                                    selectedRowKeys,
                                    selectedItem
                                })
                            }
                        }}
                        dataSource={this.state.dataSource1}
                        columns={columns}
                    />
                </Card>
                <Card title="Mock-表格分页">
                    <Table
                        bordered
                        dataSource={this.state.dataSource1}
                        columns={columns}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}
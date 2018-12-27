import React from 'react'
import { Card, Form, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component {


    render() {
        return (
            <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>
            </div>
        );
    }
}

class FilterForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市选择">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="请选择" style={{width:80}}>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">上海市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="请选择" style={{width:100}}>
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="运营模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="全部" style={{width:100}}>
                                <Option value="">全部</Option>
                                <Option value="1">加盟商模式</Option>
                                <Option value="2">自运营模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem style={{float:'right'}}>
                    <Button type="primary">查询</Button>
                    <Button>重围</Button>
                </FormItem>
            </Form>
        )
    }
}

FilterForm = Form.create()(FilterForm)
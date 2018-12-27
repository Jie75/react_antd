import React from 'react'
import { Form, Card, Input, Icon, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Checkbox, Button } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option
const TextArea = Input.TextArea;
class RegisterForm extends React.Component {

    handleSubmit = () => {
        let regValues = this.props.form.getFieldsValue();
        console.log(regValues);
    }

    handleReset = () => {
        this.props.form.resetFields()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 20,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="register form" >
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: 'username is required'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码"  {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [

                                    ]
                                })(
                                    <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别"  {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄"  {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态"  {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: 2
                                })(
                                    <Select>
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好"  {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: [1, 3]
                                })(
                                    <Select mode="multiple">
                                        <Option value={1}>1</Option>
                                        <Option value={2}>2</Option>
                                        <Option value={3}>3</Option>
                                        <Option value={4}>4</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="婚否"  {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日"  {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-01-08')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址"  {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '河南省郑州市'
                                })(
                                    <TextArea
                                        autosize={{
                                            minRows: 3,
                                            maxRows: 5
                                        }}
                                    ></TextArea>
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间"  {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像"  {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('prototype', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox >
                                        已阅读<a href="">协议</a>
                                    </Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem   {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                            <Button type="primary" onClick={this.handleReset}>重置</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div >
        );
    }
}

export default Form.create()(RegisterForm)
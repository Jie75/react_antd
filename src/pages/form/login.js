import React from 'react'
import { Card, Form, Button, Input, message, Icon, Checkbox } from 'antd';

const FormItem = Form.Item

class LoginForm extends React.Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`hello ${values.username},welcome to React,your password is ${values.password}`)
            }
        })
    }

    

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card
                    title="login form"
                >
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">login</Button>
                        </FormItem>

                    </Form>
                </Card>
                <Card
                    title="login form horizontal"
                >
                    <Form layout="vertical" style={{ width: 400 }}>
                        <FormItem>
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
                        <FormItem>
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
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a style={{ color: 'red', float: 'right' }}> 忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>login</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div >
        );
    }
}

export default Form.create()(LoginForm)
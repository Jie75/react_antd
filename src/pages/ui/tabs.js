import React from 'react'
import { Card, Tabs, Message, Icon } from 'antd';

const TabPane = Tabs.TabPane


export default class Tab extends React.Component {

    componentWillMount() {
        const panes = [
            {
                title: 'tab1',
                content: 'content1',
                key: '1'
            },
            {
                title: 'tab2',
                content: 'content2',
                key: '2'
            },
            {
                title: 'tab3',
                content: 'content3',
                key: '3'
            },
            {
                title: 'tab4',
                content: 'content4',
                key: '4'
            },
            {
                title: 'tab5',
                content: 'content5',
                key: '5'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    newTabIndex=0;
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }



    callback = (key) => {
        Message.info('tab' + key)
    }

    render() {
        return (
            <div>
                <Card title="tab页签">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">this tab 1</TabPane>
                        <TabPane tab="Tab 2" key="2">this tab 2</TabPane>
                        <TabPane tab="Tab 3" key="3">this tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="icon tab">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<b><Icon type="plus" />添加</b>} key="1">this tab 1</TabPane>
                        <TabPane tab={<b><Icon type="edit" />编辑</b>} key="2">this tab 2</TabPane>
                        <TabPane tab={<b><Icon type="delete" />删除</b>} key="3">this tab 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="tab close">
                    <Tabs
                        type="editable-card"
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map(panel => {
                                return <TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                >{panel.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
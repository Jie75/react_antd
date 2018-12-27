import React from 'react'
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { switchMenu } from "../../redux/action";

import menuConfig from '../../config/menuConfig';
import "./index.less";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class NavLeft extends React.Component {

    state = {
        currentMenu: ''
    }

    componentWillMount() {
        let currentMenu = window.location.hash.replace(/#|\?.*$/g, '')
        const menuTreeNode = this.renderMenu(menuConfig, currentMenu);
        this.setState({
            currentMenu,
            menuTreeNode
        })
    }
    handleClick = ({ item, key }) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentMenu: key
        })
    }

    // menu render
    renderMenu = (data, currentMenu) => {
        return data.map((item, index) => {
            if(item.key===currentMenu){
                const{dispatch}=this.props;
                dispatch(switchMenu(item.title))
            }
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <MenuItem title={item.title} key={item.key} >
                <NavLink to={item.key}>{item.title}</NavLink>
            </MenuItem >
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="favicon.ico" />
                    <h1>React_AntD</h1>
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentMenu]}
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default connect()(NavLeft)
import React from 'react'
import { Row, Col } from 'antd';

import Header from "./components/header";
import Footer from "./components/footer";
import Navleft from "./components/navLeft";

import './style/common.less'

export default class Admin extends React.Component {

    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <Navleft></Navleft>
                </Col>
                <Col span="20" className="main">
                    <Header />
                    <Row className="content">
                    content
                        {/* {this.props.children} */}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}
import React from 'react'
import { Row, Col } from 'antd';

import './index.less'
import utils from '../../utils/utils';
import Axios from '../../axios';
import { connect } from "react-redux";

class Header extends React.Component {
    state = {}

    componentWillMount() {
        this.setState({
            userName: 'M.R Li'
        })
        setInterval(() => {
            let time = utils.formateDate(new Date().getTime())
            this.setState({ time })
        }, 1000);
        this.getWeather();
    }

    getWeather() {
        Axios.jsonp({
            url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=57dac504b4b113e9bb8450b5789b4144',
        }).then(res => {
            if (res.status === '1') {
                this.setState({
                    weather: res.lives[0].weather
                })
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span='24'>
                        <span>welcome , {this.state.userName}</span>
                        <a href="#">logout</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span='4' className="breadcrumb-title">
                        {this.props.menuName}
                    </Col>
                    <Col span='20' className="weather">
                        <span className="date">{this.state.time}</span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        menuName: state.menuName
    }
}

export default connect(mapStateToProps)(Header)
import React from 'react'

import './index.less'
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';

class Home extends React.Component {


    render() {
        return (
            <div className="home-wrap">
                learn
            </div>
        );
    }
}

export default connect()(Home)
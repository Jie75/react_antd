import React from 'react'
import { Card, Carousel } from 'antd';

import './index.less'

export default class Carousels extends React.Component {


    render() {
        return (
            <div>
                <Card title="横向轮播">
                    <Carousel
                        autoplay={true}
                        effect="fade"
                    >
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
                <Card title="竖向轮播" className="slide-warp">
                    <Carousel
                        autoplay={true}
                        effect="fade"
                    >
                        <div><img src="http://placehold.it/900x300" /></div>
                        <div><img src="http://placehold.it/900x300" /></div>
                        <div><img src="http://placehold.it/900x300" /></div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}
import React from 'react'
import { Card, Col, Row, Modal } from "antd";

export default class Gallery extends React.Component {

    state = {
        showModal: false
    }

    gImg = () => {
        let imgs = [];
        for (let i = 0; i < 8; i++) {
            imgs.push(Math.ceil(Math.random() * 1000 / 2) + 'x120')
        }
        return imgs;
    }

    viewImg = (imgSrc) => {
        this.setState({
            showModal: true,
            currentImg: 'http://placehold.it/' + imgSrc
        })
    }

    render() {

        const imgs = [
            this.gImg(),
            this.gImg(),
            this.gImg(),
            this.gImg(),
            this.gImg()
        ]

        return (
            <div>
                <Row>
                    {
                        imgs.map((item, i) =>
                            <Col key={item} md={(i = imgs.length ? 4 : 5)}>
                                {
                                    item.map(img =>
                                        <Card
                                            key={img}
                                            onClick={() => this.viewImg(img)}
                                            cover={<img src={'http://placehold.it/' + img} />}
                                        >
                                            <Card.Meta title="img" description="description" />
                                        </Card>
                                    )
                                }
                            </Col>
                        )
                    }
                </Row>
                <Modal
                    title='大图'
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: false }) }}
                    footer={null}
                >
                    <img src={this.state.currentImg} style={{ width: '100%' }} />
                </Modal>
            </div>
        );
    }
}
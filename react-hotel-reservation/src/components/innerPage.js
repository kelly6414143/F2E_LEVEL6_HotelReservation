import React,{Component} from 'react';
import InnerPageHeader from './innerPageHeader'
// import { Router, Route, Link } from 'react-router'
import { 
    Container,
    Row,
    Col,
    Input,
    Card,
    CardText,
    CardBody,
    Progress } from 'reactstrap';

export default class InnerPage extends Component {
      render() {
        return (
            <div className="innerPage">
                <div className="topArea">
                    <InnerPageHeader></InnerPageHeader>
                    <div className="content">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>
                                            <span>HOT</span>
                                        </Col>
                                        <Col>
                                            房型名稱:Single Room
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <button>預訂</button>
                                </Col>
                            </Row>
                            <Row className="roomsRow">
                                <Col xs="7" >
                                     <img src="https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" alt="Card cap" />
                                </Col>
                                <Col xs="5">
                                    <Row>
                                        <img src="https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Card cap" />
                                    </Row>
                                    <Row>
                                        <img src="https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" alt="Card cap" />
                                    </Row>
                                </Col>
                            </Row>


                            <Row>
                                <Col xs="8">
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col><span>入住時間</span></Col>
                                                <Col><Input>2019年8月18日</Input></Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col><span>退房時間</span></Col>
                                                <Col><Input>2019年8月20日</Input></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="4">
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col><span>客房</span></Col>
                                                <Col>
                                                    <Input type="select" name="select">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col><span>成人</span></Col>
                                                <Col>
                                                    <Input type="select" name="select">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col><span>小孩</span></Col>
                                                <Col>
                                                    <Input type="select" name="select">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>


                            <Row>
                                <Col xs="8" >
                                    <Row>
                                        <Col>
                                            日期選擇器
                                        </Col>
                                        <Col>
                                            日期選擇器
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="4">
                                    <Row>總價 NT3200</Row>
                                    <Row></Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="9">
                                    <Row>
                                        Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
                                    </Row>
                                    <Progress value="25" />
                                    <Progress multi>
                                        <Progress bar value="15" />
                                        <Progress bar color="success" value="30" />
                                        <Progress bar color="info" value="25" />
                                        <Progress bar color="warning" value="20" />
                                        <Progress bar color="danger" value="5" />
                                    </Progress>
                                </Col>
                                <Col xs="3">
                                    <Card>
                                        <CardBody>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
      }
  }


import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
      render() {
        return (
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col xs="6">
                            <Row>
                                <Col xs="2"></Col>
                                <Col xs="5">
                                    <Row>Tel: 071234567</Row>
                                    <Row>Fax: 071234567</Row>
                                </Col>
                                <Col xs="5">
                                    <Row>Email: lucky@gamil.com</Row>
                                    <Row>Add: 台中市西屯區</Row>
                                </Col>
                            </Row>
                        </Col>
                        {/* <Col xs="1"></Col> */}
                        <Col xs="6">
                            <Row className="langRow">
                                <Col>繁體中文</Col>
                                <Col>简体中文</Col>
                                <Col>日本語</Col>
                                <Col>English</Col>
                                <Col>한국어</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
      }
  }


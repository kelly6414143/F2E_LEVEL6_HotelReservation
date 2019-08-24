import React,{Component} from 'react';
// import DayPicker from 'react-day-picker';
import InnerPageHeader from './innerPageHeader'
import {Link} from 'react-router-dom';
import 'react-day-picker/lib/style.css';
import { 
    Row,
    Col,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormFeedback, 
    FormText
    } from 'reactstrap';

export default class reservationDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            roomDetail : this.props.location.state
        }
       
    }

      render() {
        return (
            <div className="reservationDetail">
                <div className="topArea">
                    <InnerPageHeader></InnerPageHeader>
                    <div className="content">
                       <h3 className="content_title">．訂單內容</h3>
                            <Row className="firstRow">
                                <Col xs="5">
                                    <img src={this.state.roomDetail.roomImg} alt="roomImg"/>
                                </Col>
                                <Col xs="7">
                                    <Row className="firstRow_title">
                                        <Col xs="9">
                                            <span className="hotTag">HOT</span>
                                            <span>房型名稱 : {this.state.roomDetail.roomName}</span>
                                        </Col>
                                        <Col xs="3">
                                            <Link  className="linkButton" to={`/innerPage/${this.state.roomDetail.id}`}>
                                                <button>取消</button>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row className="firstRow_detail">
                                        <Col>
                                            <Row>
                                                 {/* <span className="hotTag">HOT</span> */}
                                                <span>入住日期 : {this.state.roomDetail.startDay.getFullYear()} 年 {this.state.roomDetail.startDay.getMonth()+1} 月 {this.state.roomDetail.startDay.getDate()} 日 ~ 
                                                {this.state.roomDetail.endDay.getFullYear()} 年 {this.state.roomDetail.endDay.getMonth()+1} 月 {this.state.roomDetail.endDay.getDate()} 日 </span>
                                            </Row>
                                            <Row>
                                                {/* <span className="hotTag">HOT</span> */}
                                                 <span>入住人數 : {this.state.roomDetail.totalPeople}</span>
                                            </Row>
                                            <Row className="firstRow_detail_price">
                                                {/* <span className="hotTag">HOT</span> */}
                                                <span>不含早餐</span>
                                                <Row className="priceRow">總價 NT{this.state.roomDetail.totalPrice}<span></span>
                                                </Row>
                                            </Row>  
                                            <Row>
                                               {this.state.roomDetail.description}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>


                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Input without validation</Label>
                                    <Input />
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="exampleEmail">Valid input</Label>
                                    <Input valid />
                                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="examplePassword">Invalid input</Label>
                                    <Input invalid />
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="exampleEmail">Input without validation</Label>
                                    <Input />
                                    <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="exampleEmail">Valid input</Label>
                                    <Input valid />
                                    <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="examplePassword">Invalid input</Label>
                                    <Input invalid />
                                    <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                    </FormGroup>
                                </Form>
                    </div>
                </div>
            </div>
        );
      }
  }


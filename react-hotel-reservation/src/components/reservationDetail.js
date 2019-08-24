import React,{Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
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
    FormText,
    Button
    } from 'reactstrap';

export default class reservationDetail extends Component {
    constructor(props){
        super(props)
        this.handleDayChange = this.handleDayChange.bind(this);
        // this.validEmail=this.validEmail.bind(this);
        this.state = {
            roomDetail : this.props.location.state,
            // interval:null,
            // emailinValid:false,
            // emailValid:false,
            selectedDay: undefined,
            isEmpty: true,
            isDisabled: false,
        };
       
    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();
        this.setState({
          selectedDay,
          isEmpty: !input.value.trim(),
          isDisabled: modifiers.disabled === true,
        });
      }

    //   validEmail(e){
    //         //  clearInterval(this.state.interval)
    //         let value = e.target.value
    //         console.log(value)
    //         setTimeout(()=>{
    //           console.log('inner')
    //         let valid = /ab+c/
    //         console.log(valid.test(value))
    //         // this.validEmail(e)
    //       },2000)
    //     //   this.validEmail(e);
    //   }

      render() {
        const { selectedDay, isDisabled, isEmpty } = this.state;
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
                                                <span>入住日期 : {this.state.roomDetail.startDay.getFullYear()} 年 {this.state.roomDetail.startDay.getMonth()+1} 月 {this.state.roomDetail.startDay.getDate()} 日 ~ 
                                                {this.state.roomDetail.endDay.getFullYear()} 年 {this.state.roomDetail.endDay.getMonth()+1} 月 {this.state.roomDetail.endDay.getDate()} 日 </span>
                                            </Row>
                                            <Row>
                                                 <span>入住人數 : {this.state.roomDetail.totalPeople}</span>
                                            </Row>
                                            <Row className="firstRow_detail_price">
                                                <span className="noBreakfast">不含早餐</span>
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
                                <span className="reservationTag">訂房資料</span>
                                <Row form>
                                    <Col md={6}>
                                        <Label for="exampleEmail">入住日期</Label>
                                        <FormGroup>
                                            <DayPickerInput
                                                value={selectedDay}
                                                onDayChange={this.handleDayChange}
                                                dayPickerProps={{
                                                    selectedDays: selectedDay,
                                                    disabledDays: {
                                                    daysOfWeek: [0, 6],
                                                    },
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <Label for="exampleEmail">退房日期</Label>
                                        <FormGroup>
                                            <DayPickerInput
                                                value={selectedDay}
                                                onDayChange={this.handleDayChange}
                                                dayPickerProps={{
                                                    selectedDays: selectedDay,
                                                    disabledDays: {
                                                    daysOfWeek: [0, 6],
                                                    },
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleEmail">姓氏(英文)</Label>
                                            <Input valid />
                                            {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePassword">姓名(英文)</Label>
                                            <Input valid />
                                            {/* <FormFeedback valid>Oh noes! that name is already taken</FormFeedback> */}
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleEmail">稱謂</Label>
                                            <Input valid type="select" name="select" id="exampleSelect">
                                                <option>女士</option>
                                                <option>男士</option>
                                            </Input>
                                            {/* <FormFeedback valid>You will not be able to see this</FormFeedback> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                               
                                <FormGroup>
                                    <Label for="exampleEmail">連絡電話</Label>
                                    <Input valid />
                                    {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">電子信箱</Label>
                                    <Input invalid={false} valid={true}/>
                                    {/* <FormFeedback valid={false}>Oh noes! that name is already taken</FormFeedback> */}
                                    
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">確認信箱</Label>
                                    <Input invalid={false} valid={true} />
                                    {/* <FormFeedback valid={false}>Oh noes! that name is already taken</FormFeedback> */}
                                </FormGroup>
                                <Row className="extraService">額外加價服務</Row>
                                <FormGroup className="radioGroup"　tag="fieldset">
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            早餐&nbsp;&nbsp;&nbsp;$320/1人
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            租車旅遊&nbsp;&nbsp;&nbsp;$2200/1日
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <Link className="linkButton">
                                    <Button disabled={false}>確認訂房</Button>
                                </Link>
                            </Form>
                    </div>
                </div>
            </div>
        );
      }
  }


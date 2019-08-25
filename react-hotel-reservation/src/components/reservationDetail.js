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
        this.handleStartDayChange = this.handleStartDayChange.bind(this)
        this.handleEndDayChange = this.handleEndDayChange.bind(this)
        this.submitReservation = this.submitReservation.bind(this)
        // this.validEmail=this.validEmail.bind(this);
        this.state = {
            roomDetail : this.props.location.state,
            formSex:'W',
            formFirstname:'',
            formLastname:'',
            formTel:'',
            formEmail: '',
            formCheckEmail: '',
            formExtraService:'',
            endDayFirstDate:'',
            fisrtNameValid:false,
            fisrtNameinValid:false,
            lastNameValid:false,
            lastNameinValid:false,
            telValid:false,
            telinValid:false,
            emailinValid:false,
            emailValid:false,
            checkEmailinValid:false,
            checkEmailValid:false,
            selectedStartDay: this.props.location.state.startDay,
            selectedEndDay: this.props.location.state.endDay,
            endDayFirstDate: this.props.location.state.startDay.getTime()+24*60*60*1000,
            isEmpty: true,
            isDisabled: false,
        };
       
    }

    handleStartDayChange(day, { selected }) {
        this.setState({
            selectedStartDay: selected ? undefined : day,
            endDayFirstDate: selected ? undefined : day.getTime()+24*60*60*1000
          });
        if(this.state.selectedEndDay){
            if(this.state.selectedEndDay.getTime()<=day.getTime()+24*60*60*1000){
                this.setState({
                    selectedEndDay:undefined ,
                  });
                  this.computedPricePerRoom(
                    day.getDay(),
                    day.getTime(),
                    undefined,
                    undefined
                  )
            }else{
                this.computedPricePerRoom(
                    day.getDay(),
                    day.getTime(),
                    this.state.selectedEndDay.getDay(),
                    this.state.selectedEndDay.getTime()
                  )
            }
            
        }
      }
    
      handleEndDayChange(day, { selected }) {
          if(!this.state.selectedStartDay){
              alert('請先選擇入住日期')
              return
          }
        this.setState({
            selectedEndDay: selected ? undefined : day,
        });
      }

    getFirstName(e){
        let valid = /^[a-zA-Z,]{1,}$/
        // console.log(valid.test(e.target.value))
        this.setState({
            formFirstname:e.target.value,
            fisrtNameValid:valid.test(e.target.value),
            fisrtNameinValid:!valid.test(e.target.value)
        });
    }
    getLastName(e){
        let valid = /^[a-zA-Z]{1,}$/
        // console.log(valid.test(e.target.value))
        this.setState({
            formLastname:e.target.value,
            lastNameValid:valid.test(e.target.value),
            lastNameinValid:!valid.test(e.target.value)
        });
    }
    getSex(e){
        this.setState({
            formSex:e.target.value
        });
    }
    getTel(e){
        let valid = /^[0][9][\d]{8}$/
        this.setState({
            formTel:e.target.value,
            telValid:valid.test(e.target.value),
            telinValid:!valid.test(e.target.value)
        });
    }
    getEmail(e){
        if(e.target.value){
            let valid = /\w@[\w.]{1,}[^./<>_+=]$/
            this.setState({
                formEmail:e.target.value,
                emailValid:valid.test(e.target.value),
                emailinValid:!valid.test(e.target.value)
            });
        }else{
            this.setState({
                formEmail:e.target.value,
                emailValid:false,
                emailinValid:false
            });
        }
    }
    getCheckEmail(e){
        if(e.target.value){
            let valid = e.target.value===this.state.formEmail?true:false
            this.setState({
                formCheckEmail:e.target.value,
                checkEmailValid:valid,
                checkEmailinValid:!valid
            });
        }else{
            this.setState({
                formCheckEmail:e.target.value,
                checkEmailValid:false,
                checkEmailinValid:false
            });
        }
    }
    getExtraServiceSelect(e){
        this.setState({
            formExtraService:e.target.value
        });
    }

    submitReservation(){
        // alert('完善驗證綁定中')
        function formatTime(time){
            let formatTime = time.split('/')
            if(formatTime[1]<10){formatTime[1]=`0${formatTime[1]}`}
            if(formatTime[2]<10){formatTime[2]=`0${formatTime[2]}`}
            return formatTime
        }

        let{
            formSex,
            formFirstname,
            formLastname,
            formTel,
            formEmail,
            formCheckEmail,
            formExtraService,
            selectedStartDay,
            selectedEndDay}=this.state
            selectedStartDay =selectedStartDay?formatTime(selectedStartDay.toLocaleDateString()).join('-') :""
            selectedEndDay = selectedEndDay? formatTime(selectedEndDay.toLocaleDateString()).join('-'):""
        let submitData = {
            name: formFirstname + formLastname,
            tel: formTel,
            date: [selectedStartDay,selectedEndDay]
        }
        // console.log(submitData)
        fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.state.roomDetail.id}`,
            {
            method:"POST",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC',
            }),
            body: JSON.stringify(submitData)
        }).then(response =>{
                return response.json(); 
            }).then((jsonData) => {
                // console.log(jsonData);
            }).catch((error)=>{
                console.log(error)
            })
    } 

      render() {
        const { selectedStartDay,selectedEndDay} = this.state;
        let disabledEndDays = this.state.endDayFirstDate?new Date(this.state.endDayFirstDate):new Date()
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
                                <Row form className="datePickerRow">
                                    <Col md={4}>
                                        <Label for="exampleEmail">入住日期</Label>
                                        <FormGroup>
                                            <DayPickerInput
                                                value={selectedStartDay}
                                                onDayChange={this.handleStartDayChange}
                                                dayPickerProps={{
                                                    disabledDays: {
                                                        before: new Date(),
                                                    },
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Label for="exampleEmail">退房日期</Label>
                                        <FormGroup>
                                            <DayPickerInput
                                                value={selectedEndDay}
                                                onDayChange={this.handleEndDayChange}
                                                dayPickerProps={{
                                                    selectedDays: selectedEndDay,
                                                    disabledDays: {
                                                        before:disabledEndDays
                                                    },
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        歡迎您的蒞臨，誠摯為您服務{(this.state.selectedEndDay.getTime()-this.state.selectedStartDay.getTime()) / (24*60*60*1000)}晚
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleEmail">姓氏(英文)</Label>
                                            <Input valid={this.state.lastNameValid} invalid={this.state.lastNameinValid} value={this.state.formLastname} onChange = {(e) => this.getLastName(e)}/>
                                            <FormFeedback invalid={this.state.lastNameinValid}>必須為英文</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePassword">姓名(英文)</Label>
                                            <Input valid={this.state.fisrtNameValid} invalid={this.state.fisrtNameinValid} value={this.state.formFirstname} onChange = {(e) => this.getFirstName(e)}/>
                                            <FormFeedback invalid={this.state.fisrtNameinValid}>必填，格式為英文</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleEmail">稱謂</Label>
                                            <Input type="select" name="select" id="exampleSelect" value={this.state.formSex} onChange = {(e) => this.getSex(e)}>
                                                <option value="W">女士</option>
                                                <option value="M">男士</option>
                                            </Input>
                                            {/* <FormFeedback valid>You will not be able to see this</FormFeedback> */}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                               
                                <FormGroup>
                                    <Label for="exampleEmail">連絡電話</Label>
                                    <Input  valid={this.state.telValid} invalid={this.state.telinValid} value={this.state.formTel} onChange = {(e) => this.getTel(e)}/>
                                    <FormFeedback invalid={this.state.telinValid}>手機格式錯誤(ex:0912345678)</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">電子信箱</Label>
                                    <Input valid={this.state.emailValid} invalid={this.state.emailinValid} value={this.state.formEmail} onChange = {(e) => this.getEmail(e)}/>
                                    <FormFeedback invalid={this.state.emailinValid}>信箱格式錯誤，包含＠不得已特殊字元為最後一字元</FormFeedback>
                                    
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">確認信箱</Label>
                                    <Input valid={this.state.checkEmailValid} invalid={this.state.checkEmailinValid} value={this.state.formCheckEmail} onChange = {(e) => this.getCheckEmail(e)} />
                                    <FormFeedback invalid={this.state.checkEmailinValid}>與上列不相符</FormFeedback>
                                </FormGroup>
                                <Row className="extraService">額外加價服務</Row>
                                <FormGroup className="radioGroup"　tag="fieldset">
                                    <FormGroup check value={this.state.formExtraService} onChange = {(e) => this.getExtraServiceSelect(e)}>
                                        <Label check>
                                            <Input type="radio" name="radio1" value="breakfast" />{' '}
                                            早餐&nbsp;&nbsp;&nbsp;$320/1人
                                        </Label>
                                        <Label check>
                                            <Input type="radio" name="radio1"  value="driveTour"/>{' '}
                                            租車旅遊&nbsp;&nbsp;&nbsp;$2200/1日
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <Link className="linkButton">
                                    <Button disabled={false} onClick={this.submitReservation}>確認訂房</Button>
                                </Link>
                            </Form>
                    </div>
                </div>
            </div>
        );
      }
  }


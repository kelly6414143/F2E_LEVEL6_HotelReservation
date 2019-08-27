import React,{Component} from 'react';
import DayPicker from 'react-day-picker';
import InnerPageHeader from './innerPageHeader'
import 'react-day-picker/lib/style.css';
import {Link} from 'react-router-dom';
import { 
    Row,
    Col,
    Input,
    Card,
    CardText,
    CardBody,
    Progress,
    Button } from 'reactstrap';

export default class InnerPage extends Component {
    constructor(props){
        super(props)
        this.handleStartDayClick = this.handleStartDayClick.bind(this);
        this.handleEndDayClick = this.handleEndDayClick.bind(this)
        this.computedPricePerRoom = this.computedPricePerRoom.bind(this)
        this.selectRoomNum=this.selectRoomNum.bind(this)
        this.selectAdult=this.selectAdult.bind(this)
        this.selectChild = this.selectChild.bind(this)
        this.state = {
          selectedStartDay: null,
          selectedEndDay:null,
          checkInEarly: null,
          checkInLate: null,
          checkOut:null,
          holiday:null,
          normalDay:null,
          roomNum:0,
          adultNum:0,
          childNum:0
        };
    }

    handleStartDayClick(day, { selected }) {
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
    
      handleEndDayClick(day, { selected }) {
          if(!this.state.selectedStartDay){
              alert('請先選擇入住日期')
              return
          }
        this.setState({
            selectedEndDay: selected ? undefined : day,
        });
        this.computedPricePerRoom(
            this.state.selectedStartDay.getDay(),
            this.state.selectedStartDay.getTime(),
            day.getDay(),
            day.getTime()
          )
      }

      computedPricePerRoom(startWeek,startDate,endWeek,endDate){
        let day = (endDate-startDate)/(24*60*60*1000)
        if(endDate){
            let week = parseInt(day/7)
            let res = day-week*7
            if(res===0){
                this.setState({
                    holiday:3*week,
                    normalDay:4*week
                  });
            }else{
                if(startWeek===5){
                    if(res<=3){
                        this.setState({
                            holiday:3*week+res,
                            normalDay:day-(3*week+res)
                          });
                    }else{
                        this.setState({
                            holiday:3*week+7-startWeek+1,
                            normalDay:day-(3*week+7-startWeek+1)
                          });
                    }
                }else if(startWeek===6){
                    if(res<=2){
                        this.setState({
                            holiday:3*week+res,
                            normalDay:day-(3*week+res)
                          });
                    }else{
                        this.setState({
                            holiday:3*week+2,
                            normalDay:day-(3*week+2)
                          });
                    }
                }else if(startWeek===0){
                    if(res<=5){
                        this.setState({
                            holiday:3*week+1,
                            normalDay:day-(3*week+1)
                          });
                    }else{
                        this.setState({
                            holiday:3*week+2,
                            normalDay:day-(3*week+2)
                          });
                    }
                }else{
                    if(res<=4){
                        this.setState({
                            holiday:day-(4*week+res),
                            normalDay:4*week+res
                          });
                    }else{
                        this.setState({
                            holiday:3*week+res-4,
                            normalDay:day-(3*week+res-4)
                          });
                    }
                }
            }
        }else{
            this.setState({
                holiday:0,
                normalDay:0
              });
        }
      }

      selectRoomNum(e){
        this.setState({
            roomNum:e.target.value.substring(0,1)
        })
      }

      selectAdult(e){
          if(Number(e.target.value.substring(0,1)) +Number(this.state.childNum)>this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax){
              if(this.state.roomNum){
                alert(`總人數不得超過${this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax}`)
              }else{
                alert('請先選擇房間數')
              }
              this.setState({
                adultNum:0
              })
              return
          }
        this.setState({
            adultNum:e.target.value.substring(0,1)
        })
      }

      selectChild(e){
        if(Number(e.target.value.substring(0,1)) +Number(this.state.adultNum)>this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax){
            if(this.state.roomNum){
                alert(`總人數不得超過${this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax}`)
              }else{
                alert('請先選擇房間數')
              }
              this.setState({
                childNum:0
              })
              return
        }
        this.setState({
            childNum:e.target.value.substring(0,1)
        })
      }

    componentDidMount = () => {
        const {match}=this.props
        fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${match.params.id}`,
            {
            headers: new Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC',
            })
        }).then(response =>{
            response.json().then(res=>{
                this.setState({
                    hotelBookingData: res.booking,
                    hotelRoomData: res.room[0],
                    checkInEarly: res.room[0].checkInAndOut.checkInEarly.split(':')[0],
                    checkInLate: res.room[0].checkInAndOut.checkInLate.split(':')[0],
                    checkOut: res.room[0].checkInAndOut.checkOut.split(':')[0]
                });
            })
        })
      }

      render() {
        let disabledBookingDays = []
        if(this.state.hotelBookingData && Object.keys(this.state.hotelBookingData).length>0){
            disabledBookingDays = this.state.hotelBookingData.map((data)=>{
                let formatDate = new Date(data.date)
                return formatDate
            })
        }

        let disabledStartDays = [
            {before:new Date(new Date().getTime()+24*60*60*1000)},
            disabledBookingDays]
            disabledStartDays = disabledStartDays.flat()            

        let disabledEndDays = [
            {before:this.state.endDayFirstDate?new Date(this.state.endDayFirstDate):new Date(new Date().getTime()+24*60*60*1000)},
            disabledBookingDays]
        disabledEndDays = disabledEndDays.flat()
        // console.log(this.state.hotelBookingData)
        let pathData = {pathname:'/reservationDetail',
        state:{
            id: this.state.hotelRoomData?this.state.hotelRoomData.id:'',
            roomName: this.state.hotelRoomData?this.state.hotelRoomData.name:'',
            roomImg: this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[1]:'',
            description: this.state.hotelRoomData?this.state.hotelRoomData.description:'',
            startDay: this.state.selectedStartDay,
            endDay: this.state.selectedEndDay,
            totalPeople: Number(this.state.adultNum)+Number(this.state.childNum),
            totalPrice: this.state.hotelRoomData?this.state.roomNum*(this.state.holiday*this.state.hotelRoomData.holidayPrice + this.state.normalDay*this.state.hotelRoomData.normalDayPrice):''},
            // bookingData: this.state.hotelBookingData?this.state.hotelBookingData:'',
            bookingData:"kk"
        }

        let linkBtnDisable = this.state.adultNum>0 && this.state.childNum>=0 && this.state.selectedStartDay && this.state.selectedEndDay && this.state.roomNum>0 ? false : true
        // let linkBtnDisable=false

        return (
            <div className="innerPage">
                <div className="topArea">
                    <InnerPageHeader></InnerPageHeader>
                    <div className="content">
                        {/* <Container> */}
                            <Row className="firstRow">
                                <Col>
                                    <Row>
                                        <Col>
                                            <span className="hotTag">HOT</span>
                                            房型名稱:{this.state.hotelRoomData?this.state.hotelRoomData.name:''}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Link className="linkButton" to={pathData}>
                                        <Button disabled={linkBtnDisable}>預訂</Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className="roomsRow">
                                <Col xs="7" >
                                     <img src={this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[0]:''} alt="Card cap" />
                                </Col>
                                <Col xs="5">
                                    <Row>
                                        <img src={this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[1]:''} alt="Card cap" />
                                    </Row>
                                    <Row>
                                        <img src={this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[2]:''} alt="Card cap" />
                                    </Row>
                                </Col>
                            </Row>


                            <Row>
                                <Col xs="7">
                                    <Row className="datepickerRow">
                                        <Col>
                                            <Row>
                                                <Col xs="4"><span>入住時間</span></Col>
                                                <Col xs="8"><Input type="text" readOnly value={this.state.selectedStartDay
                                                    ? this.state.selectedStartDay.toLocaleDateString()
                                                    : 'Please select a day'}></Input></Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col xs="4"><span>退房時間</span></Col>
                                                <Col xs="8"><Input type="text" readOnly value={this.state.selectedEndDay
                                                ? this.state.selectedEndDay.toLocaleDateString()
                                                : 'Please select a day'}></Input></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="5">
                                    <Row className="selectRow">
                                        <Col>
                                            <Row>
                                                <Col xs="5"><span>客房</span></Col>
                                                <Col xs="7">
                                                    <Input type="select" name="select" onChange={this.selectRoomNum} value={this.state.roomNum}>
                                                        <option value='0'>0間</option>
                                                        <option value='1'>1間</option>
                                                        <option value='2'>2間</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col xs="5"><span>成人</span></Col>
                                                <Col xs="7">
                                                    <Input type="select" name="select" value={this.state.adultNum} onChange={this.selectAdult}>
                                                        <option value='0'>0人</option>
                                                        <option value='1'>1人</option>
                                                        <option value='2'>2人</option>
                                                        <option value='3'>3人</option>
                                                        <option value='4'>4人</option>
                                                        <option value='5'>5人</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col xs="5"><span>小孩</span></Col>
                                                <Col xs="7">
                                                    <Input disabled={this.state.hotelRoomData &&!this.state.hotelRoomData.amenities['Child-Friendly']} type="select" name="select" value={this.state.childNum} onChange={this.selectChild}>
                                                        <option value='0'>0人</option>
                                                        <option value='1'>1人</option>
                                                        <option value='2'>2人</option>
                                                        <option value='3'>3人</option>
                                                        <option value='4'>4人</option>
                                                        <option value='5'>5人</option>
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
                                            <DayPicker
                                            selectedDays={this.state.selectedStartDay}
                                            onDayClick={this.handleStartDayClick}
                                            disabledDays={disabledStartDays}/>
                                        </Col>
                                        <Col>
                                            <DayPicker
                                            selectedDays={this.state.selectedEndDay}
                                            onDayClick={this.handleEndDayClick}
                                            disabledDays={disabledEndDays}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="4">
                                    <Row className="priceRow">總價  NT {this.state.hotelRoomData?this.state.roomNum*(this.state.holiday*this.state.hotelRoomData.holidayPrice + this.state.normalDay*this.state.hotelRoomData.normalDayPrice):''} 
                                    <span></span> </Row>
                                    <Row className="detailRow">
                                        <Col xs="5">
                                              <div>
                                                  - wifi: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Wi-Fi']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 早餐: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Breakfast']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 電視: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Television']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 空調: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Air-Conditioner']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 冰箱: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Refrigerator']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 沙發: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Sofa']?'有':'無'):''}
                                              </div>
                                        </Col>
                                        <Col xs="7">
                                            <div>
                                                - 漂亮的視野: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Great-View']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - 禁止吸菸: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Smoke-Free']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - 適合兒童: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Child-Friendly']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - 寵物攜帶: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Pet-Friendly']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - Mini Bar: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Mini-Bar']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - Room Service: {this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Room-Service']?'有':'無'):''}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="describeRow">
                                <Col xs="9">
                                    <Row>
                                        {this.state.hotelRoomData?this.state.hotelRoomData.description:''}
                                    </Row>
                                    <Row className="checkInProgress">
                                        <Col xs="3">
                                              checkIn時間
                                        </Col>
                                        <Col xs="9">
                                            <span className="checkInear">{this.state.hotelRoomData?this.state.hotelRoomData.checkInAndOut.checkInEarly:''}</span>
                                            <Progress multi>
                                                <Progress bar value={this.state.checkInEarly/24*100} />
                                                <Progress bar value={(this.state.checkInLate-this.state.checkInEarly)/24*100} />
                                                <Progress bar value={(24-this.state.checkInLate)/24*100} />
                                            </Progress>
                                            <span className="checkInlate">{this.state.hotelRoomData?this.state.hotelRoomData.checkInAndOut.checkInLate:''}</span>
                                        </Col>
                                    </Row>
                                    <Row className="checkOutProgress">
                                        <Col xs="3">
                                              checkOut時間
                                        </Col>
                                        <Col xs="9">
                                        <span id="checkOut">{this.state.hotelRoomData?this.state.hotelRoomData.checkInAndOut.checkOut:''}</span>
                                            <Progress multi>
                                                <Progress bar value={this.state.checkOut/24*100} />
                                                <Progress bar value={(24-this.state.checkOut)/24*100} />
                                            </Progress>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="3">
                                    <Card>
                                        <CardBody>
                                            <CardText>
                                                床型 : {this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.Bed[0]:''}
                                            </CardText>
                                            <CardText>房客人數限制 : {this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.GuestMin:''} ~ {this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.GuestMax:''} 人 </CardText>
                                            <CardText>衛浴數量 : {this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort['Private-Bath']:''} 間</CardText>
                                            <CardText>房間大小 : {this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.Footage:''} 平方公尺</CardText>
                                            <CardText>假日(五-日)價格 : {this.state.hotelRoomData?this.state.hotelRoomData.holidayPrice:''}</CardText>
                                            <CardText>平日(一-四)價格 : {this.state.hotelRoomData?this.state.hotelRoomData.normalDayPrice:''}</CardText>

                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        {/* </Container> */}
                    </div>
                </div>
            </div>
        );
      }
  }


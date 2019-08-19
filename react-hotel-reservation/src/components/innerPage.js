import React,{Component} from 'react';
import DayPicker from 'react-day-picker';
import InnerPageHeader from './innerPageHeader'
import 'react-day-picker/lib/style.css';
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
    constructor(props){
        super(props)
        this.handleStartDayClick = this.handleStartDayClick.bind(this);
        this.handleEndDayClick = this.handleEndDayClick.bind(this);
        this.state={
            selectedStartDay: null,
            selectedEndDay:null,
            hotelRoomData:null
        }
    }

    handleStartDayClick(day, { selected }) {
        this.setState({
            selectedStartDay: selected ? undefined : day,
        });
      }
      handleEndDayClick(day, { selected }) {
        this.setState({
            selectedEndDay: selected ? undefined : day,
        });
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
                    hotelRoomData: res.room[0],
                });
            })
        })
      }

      render() {
        console.log(this.state.hotelRoomData)
        // const disabledStartDays = {[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
        // const disabledEndDays = {
        // daysOfWeek: [0, 6],
        // };
        return (
            <div className="innerPage">
                <div className="topArea">
                    <InnerPageHeader></InnerPageHeader>
                    <div className="content">
                        <Container fluid>
                            <Row className="firstRow">
                                <Col>
                                    <Row>
                                        <Col>
                                            <span>HOT</span>
                                            房型名稱:{this.state.hotelRoomData?this.state.hotelRoomData.name:''}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <button>預訂</button>
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
                                <Col xs="8">
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col><span>入住時間</span></Col>
                                                <Col><Input type="text" value={this.state.selectedStartDay
                                                ? this.state.selectedStartDay.toLocaleDateString()
                                                : 'Please select a day'}></Input></Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col><span>退房時間</span></Col>
                                                <Col><Input type="text"  value={this.state.selectedEndDay
                                                ? this.state.selectedEndDay.toLocaleDateString()
                                                : 'Please select a day'}></Input></Col>
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
                                            <DayPicker
                                            selectedDays={this.state.selectedStartDay}
                                            // disabledDays={disabledStartDays}
                                            onDayClick={this.handleStartDayClick}
                                            />
                                        </Col>
                                        <Col>
                                            <DayPicker
                                            selectedDays={this.state.selectedEndDay}
                                            // disabledDays={disabledEndDays}
                                            onDayClick={this.handleEndDayClick}
                                            />
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


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
        this.handleEndDayClick = this.handleEndDayClick.bind(this)
        this.state = {
          selectedStartDay: null,
          selectedEndDay:null,
        };
        // this.state={
        //     selectedStartDay: new Date(),
        //     // selectedEndDay:new Date(),
        //     hotelRoomData:null
        // }
    }

    handleStartDayClick(day, { selected }) {
        this.setState({
            selectedStartDay: selected ? undefined : day,
          });
        if(this.state.selectedEndDay){
            if(this.state.selectedEndDay.getTime()<day.getTime()){
                this.setState({
                    selectedEndDay:undefined ,
                  });
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
        let disabledEndDays = this.state.selectedStartDay?this.state.selectedStartDay:new Date()
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
                                                <Col><Input type="text" readOnly value={this.state.selectedStartDay
                                                    ? this.state.selectedStartDay.toLocaleDateString()
                                                    : 'Please select a day'}></Input></Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col><span>退房時間</span></Col>
                                                <Col><Input type="text" readOnly value={this.state.selectedEndDay
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
                                                        <option>0</option>
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
                                                        <option>0</option>
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
                                                        <option>0</option>
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
                                            onDayClick={this.handleStartDayClick}
                                            disabledDays={[
                                                {
                                                  before: new Date(),
                                                },
                                              ]}/>
                                        </Col>
                                        <Col>
                                            <DayPicker
                                            selectedDays={this.state.selectedEndDay}
                                            onDayClick={this.handleEndDayClick}
                                            disabledDays={[
                                                {
                                                  before: disabledEndDays,
                                                },
                                              ]}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="4">
                                    <Row>總價 NT3200</Row>
                                    <Row>
                                        <Col>
                                              <div>
                                                  - wifi:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Wi-Fi']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 早餐:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Breakfast']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 電視:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Television']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 空調:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Air-Conditioner']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 冰箱:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Refrigerator']?'有':'無'):''}
                                              </div>
                                              <div>
                                                  - 沙發:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Sofa']?'有':'無'):''}
                                              </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                - 漂亮的視野:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Great-View']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - 禁止吸菸:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Smoke-Free']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - 適合兒童:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Child-Friendly']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - 寵物攜帶:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Pet-Friendly']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - Mini Bar:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Mini-Bar']?'有':'無'):''}
                                            </div>
                                            <div>
                                                - Room Service:{this.state.hotelRoomData?(this.state.hotelRoomData.amenities['Room-Service']?'有':'無'):''}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="9">
                                    <Row>
                                        {this.state.hotelRoomData?this.state.hotelRoomData.description:''}
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


import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import HomeHeader from './homeHeader'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            hotelRoomData:null
        }
    }
    
    componentDidMount = () => {
        
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
            {
            headers: new Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC',
            })
        }).then(response =>{
            response.json().then(res=>{
                this.setState({
                    hotelRoomData: res.items,
                });
            })
        })
      }


      render() {
        let roomData=""
        if(this.state.hotelRoomData && this.state.hotelRoomData.length>0){
            roomData=this.state.hotelRoomData.map((data,i)=>
            <Col xs="4" key={i}>
                <Link to={`/innerPage/${data.id}`}>
                    <div className="roomsCover">
                        <h4>{data.name}</h4>
                        <p>${data.normalDayPrice} ~ ${data.holidayPrice}</p>
                        <span>more →</span>
                    </div>
                    <img key={i} src={data.imageUrl} alt="Card cap" />
                </Link>
            </Col>
            )
        }
        return (
            <div className="home">
                <div className="topArea">
                    <HomeHeader></HomeHeader>
                    <div className="content">
                        <Container fluid>
                            <Row>
                                <Col xs="8" >
                                    <div className="logoImage"></div>
                                    <Row className="roomsTitle">
                                        <div>客房介紹</div>
                                    </Row>
                                    <Row className="rooms">
                                        {roomData?roomData:''}
                                    </Row>
                                </Col>
                                <Col xs="4">
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
      }
  }


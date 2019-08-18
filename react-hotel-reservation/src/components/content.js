import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Content extends Component {
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
                console.log(res.items)
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
                <img key={i} src={data.imageUrl} alt="Card image cap" />
            </Col>
            )
        }
        return (
            <div className="content">
                <Container fluid>
                    <Row>
                        <Col xs="8">
                            <div className="logoImage"></div>
                            <Row>
                                {roomData?roomData:''}
                            </Row>
                        </Col>
                        <Col xs="4">
                        </Col>
                    </Row>
                </Container>
            </div>
        );
      }
  }


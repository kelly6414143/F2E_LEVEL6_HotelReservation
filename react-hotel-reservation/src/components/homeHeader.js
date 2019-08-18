import React,{Component} from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import './../App.scss';
import img_person from './../images/person.svg';
import img_bedroom from './../images/bedroom.svg';
import img_roomservice from './../images/room_service.svg';
import img_map from './../images/map.svg';
import img_news from './../images/new.svg';

export default class HomeHeader extends Component {
      render() {
        return (
          <div className="header">
            <Navbar>
                <Nav>
                    <NavItem>
                        <NavLink href="#"><img src={img_person} alt="about" />關於我們</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><img src={img_bedroom} alt="room_introduction"/>客房介紹</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><img src={img_roomservice} alt="room_service"/>住宿服務</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><img src={img_map} alt="traffic"/>交通指引</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><img src={img_news} alt="news"/>最新消息</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
      }
  }


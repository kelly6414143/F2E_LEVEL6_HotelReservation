(window["webpackJsonpreact-hotel-reservation"]=window["webpackJsonpreact-hotel-reservation"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/person.21ec2ace.svg"},24:function(e,t,a){e.exports=a.p+"static/media/bedroom.db939d70.svg"},25:function(e,t,a){e.exports=a.p+"static/media/room_service.602bb3ab.svg"},26:function(e,t,a){e.exports=a.p+"static/media/map.fa3bd6d6.svg"},27:function(e,t,a){e.exports=a.p+"static/media/new.7a95ab0f.svg"},36:function(e,t,a){},46:function(e,t,a){e.exports=a(63)},51:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(42),o=a.n(s),r=(a(51),a(15)),c=a(16),m=a(9),i=a(10),h=a(12),u=a(11),E=a(13),d=a(68),D=a(69),p=a(70),y=a(64),v=a(65),R=a(66),g=a(67),f=(a(36),a(23)),b=a.n(f),N=a(24),x=a.n(N),k=a(25),O=a.n(k),S=a(26),w=a.n(S),j=a(27),P=a.n(j),C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement(y.a,null,n.a.createElement(v.a,null,n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:b.a,alt:"about"}),"\u95dc\u65bc\u6211\u5011")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:x.a,alt:"room_introduction"}),"\u5ba2\u623f\u4ecb\u7d39")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:O.a,alt:"room_service"}),"\u4f4f\u5bbf\u670d\u52d9")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:w.a,alt:"traffic"}),"\u4ea4\u901a\u6307\u5f15")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:P.a,alt:"news"}),"\u6700\u65b0\u6d88\u606f")))))}}]),t}(l.Component),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:new Headers({Accept:"application/json",Authorization:"Bearer i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC"})}).then(function(e){e.json().then(function(e){a.setState({hotelRoomData:e.items})})})},a.state={hotelRoomData:null},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="";return this.state.hotelRoomData&&this.state.hotelRoomData.length>0&&(e=this.state.hotelRoomData.map(function(e,t){return n.a.createElement(d.a,{xs:"4",key:t},n.a.createElement(r.b,{to:"/innerPage/".concat(e.id)},n.a.createElement("div",{className:"roomsCover"},n.a.createElement("h4",null,e.name),n.a.createElement("p",null,"$",e.normalDayPrice," ~ $",e.holidayPrice),n.a.createElement("span",null,"more \u2192")),n.a.createElement("img",{key:t,src:e.imageUrl,alt:"Card cap"})))})),n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"topArea"},n.a.createElement(C,null),n.a.createElement("div",{className:"content"},n.a.createElement(D.a,{fluid:!0},n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"8"},n.a.createElement("div",{className:"logoImage"}),n.a.createElement(p.a,{className:"roomsTitle"},n.a.createElement("div",null,"\u5ba2\u623f\u4ecb\u7d39")),n.a.createElement(p.a,{className:"rooms"},e||"")),n.a.createElement(d.a,{xs:"4"}))))))}}]),t}(l.Component),A=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement(D.a,{fluid:!0},n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"6"},n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"2"}),n.a.createElement(d.a,{xs:"5"},n.a.createElement(p.a,null,"Tel: 071234567"),n.a.createElement(p.a,null,"Fax: 071234567")),n.a.createElement(d.a,{xs:"5"},n.a.createElement(p.a,null,"Email: lucky@gamil.com"),n.a.createElement(p.a,null,"Add: \u53f0\u4e2d\u5e02\u897f\u5c6f\u5340")))),n.a.createElement(d.a,{xs:"6"},n.a.createElement(p.a,{className:"langRow"},n.a.createElement(d.a,null,"\u7e41\u9ad4\u4e2d\u6587"),n.a.createElement(d.a,null,"\u7b80\u4f53\u4e2d\u6587"),n.a.createElement(d.a,null,"\u65e5\u672c\u8a9e"),n.a.createElement(d.a,null,"English"),n.a.createElement(d.a,null,"\ud55c\uad6d\uc5b4"))))))}}]),t}(l.Component),T=a(6),L=a(33),M=a.n(L),B=a(71),F=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement(y.a,null,n.a.createElement(B.a,{href:"/"},n.a.createElement("div",{className:"logoImage"})),n.a.createElement(v.a,null,n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:b.a,alt:"about"}),"\u95dc\u65bc\u6211\u5011")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:x.a,alt:"room_introduction"}),"\u5ba2\u623f\u4ecb\u7d39")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:O.a,alt:"room_service"}),"\u4f4f\u5bbf\u670d\u52d9")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:w.a,alt:"traffic"}),"\u4ea4\u901a\u6307\u5f15")),n.a.createElement(R.a,null,n.a.createElement(g.a,{href:"#"},n.a.createElement("img",{src:P.a,alt:"news"}),"\u6700\u65b0\u6d88\u606f")))))}}]),t}(l.Component),G=(a(41),a(72)),_=a(73),X=a(74),U=a(75),V=a(76),W=a(77),q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.match;fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(e.params.id),{headers:new Headers({Accept:"application/json",Authorization:"Bearer i2A9LrARnW0vSgOGpO9E3X7kDM1tZDQwRLDK1qOlXxXtzVKG6ByZN2JXLxqC"})}).then(function(e){e.json().then(function(e){a.setState({hotelRoomData:e.room[0],checkInEarly:e.room[0].checkInAndOut.checkInEarly.split(":")[0],checkInLate:e.room[0].checkInAndOut.checkInLate.split(":")[0],checkOut:e.room[0].checkInAndOut.checkOut.split(":")[0]})})})},a.handleStartDayClick=a.handleStartDayClick.bind(Object(T.a)(a)),a.handleEndDayClick=a.handleEndDayClick.bind(Object(T.a)(a)),a.computedPricePerRoom=a.computedPricePerRoom.bind(Object(T.a)(a)),a.selectRoomNum=a.selectRoomNum.bind(Object(T.a)(a)),a.selectAdult=a.selectAdult.bind(Object(T.a)(a)),a.selectChild=a.selectChild.bind(Object(T.a)(a)),a.state={selectedStartDay:null,selectedEndDay:null,checkInEarly:null,checkInLate:null,checkOut:null,holiday:null,normalDay:null,roomNum:0,adultNum:0,childNum:0},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"handleStartDayClick",value:function(e,t){var a=t.selected;this.setState({selectedStartDay:a?void 0:e,endDayFirstDate:a?void 0:e.getTime()+864e5}),this.state.selectedEndDay&&(this.state.selectedEndDay.getTime()<=e.getTime()+864e5?(this.setState({selectedEndDay:void 0}),this.computedPricePerRoom(e.getDay(),e.getTime(),void 0,void 0)):this.computedPricePerRoom(e.getDay(),e.getTime(),this.state.selectedEndDay.getDay(),this.state.selectedEndDay.getTime()))}},{key:"handleEndDayClick",value:function(e,t){var a=t.selected;this.state.selectedStartDay?(this.setState({selectedEndDay:a?void 0:e}),this.computedPricePerRoom(this.state.selectedStartDay.getDay(),this.state.selectedStartDay.getTime(),e.getDay(),e.getTime())):alert("\u8acb\u5148\u9078\u64c7\u5165\u4f4f\u65e5\u671f")}},{key:"computedPricePerRoom",value:function(e,t,a,l){var n=(l-t)/864e5;if(l){var s=parseInt(n/7),o=n-7*s;0===o?this.setState({holiday:3*s,normalDay:4*s}):5===e?o<=3?this.setState({holiday:3*s+o,normalDay:n-(3*s+o)}):this.setState({holiday:3*s+7-e+1,normalDay:n-(3*s+7-e+1)}):6===e?o<=2?this.setState({holiday:3*s+o,normalDay:n-(3*s+o)}):this.setState({holiday:3*s+2,normalDay:n-(3*s+2)}):0===e?o<=5?this.setState({holiday:3*s+1,normalDay:n-(3*s+1)}):this.setState({holiday:3*s+2,normalDay:n-(3*s+2)}):o<=4?this.setState({holiday:n-(4*s+o),normalDay:4*s+o}):this.setState({holiday:3*s+o-4,normalDay:n-(3*s+o-4)})}else this.setState({holiday:0,normalDay:0})}},{key:"selectRoomNum",value:function(e){this.setState({roomNum:e.target.value.substring(0,1)})}},{key:"selectAdult",value:function(e){if(Number(e.target.value.substring(0,1))+Number(this.state.childNum)>this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax)return this.state.roomNum?alert("\u7e3d\u4eba\u6578\u4e0d\u5f97\u8d85\u904e".concat(this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax)):alert("\u8acb\u5148\u9078\u64c7\u623f\u9593\u6578"),void this.setState({adultNum:0});this.setState({adultNum:e.target.value.substring(0,1)})}},{key:"selectChild",value:function(e){if(Number(e.target.value.substring(0,1))+Number(this.state.adultNum)>this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax)return this.state.roomNum?alert("\u7e3d\u4eba\u6578\u4e0d\u5f97\u8d85\u904e".concat(this.state.roomNum*this.state.hotelRoomData.descriptionShort.GuestMax)):alert("\u8acb\u5148\u9078\u64c7\u623f\u9593\u6578"),void this.setState({childNum:0});this.setState({childNum:e.target.value.substring(0,1)})}},{key:"render",value:function(){var e=this.state.endDayFirstDate?new Date(this.state.endDayFirstDate):new Date,t={pathname:"/reservationDetail",state:{id:this.state.hotelRoomData?this.state.hotelRoomData.id:"",roomName:this.state.hotelRoomData?this.state.hotelRoomData.name:"",roomImg:this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[1]:"",description:this.state.hotelRoomData?this.state.hotelRoomData.description:"",startDay:this.state.selectedStartDay,endDay:this.state.selectedEndDay,totalPeople:Number(this.state.adultNum)+Number(this.state.childNum),totalPrice:this.state.hotelRoomData?this.state.roomNum*(this.state.holiday*this.state.hotelRoomData.holidayPrice+this.state.normalDay*this.state.hotelRoomData.normalDayPrice):""}},a=!(this.state.adultNum>0&&this.state.childNum>=0&&this.state.selectedStartDay&&this.state.selectedEndDay&&this.state.roomNum>0);return n.a.createElement("div",{className:"innerPage"},n.a.createElement("div",{className:"topArea"},n.a.createElement(F,null),n.a.createElement("div",{className:"content"},n.a.createElement(p.a,{className:"firstRow"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(d.a,null,n.a.createElement("span",{className:"hotTag"},"HOT"),"\u623f\u578b\u540d\u7a31:",this.state.hotelRoomData?this.state.hotelRoomData.name:""))),n.a.createElement(d.a,null,n.a.createElement(r.b,{className:"linkButton",to:t},n.a.createElement(G.a,{disabled:a},"\u9810\u8a02")))),n.a.createElement(p.a,{className:"roomsRow"},n.a.createElement(d.a,{xs:"7"},n.a.createElement("img",{src:this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[0]:"",alt:"Card cap"})),n.a.createElement(d.a,{xs:"5"},n.a.createElement(p.a,null,n.a.createElement("img",{src:this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[1]:"",alt:"Card cap"})),n.a.createElement(p.a,null,n.a.createElement("img",{src:this.state.hotelRoomData?this.state.hotelRoomData.imageUrl[2]:"",alt:"Card cap"})))),n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"7"},n.a.createElement(p.a,{className:"datepickerRow"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"4"},n.a.createElement("span",null,"\u5165\u4f4f\u6642\u9593")),n.a.createElement(d.a,{xs:"8"},n.a.createElement(_.a,{type:"text",readOnly:!0,value:this.state.selectedStartDay?this.state.selectedStartDay.toLocaleDateString():"Please select a day"})))),n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"4"},n.a.createElement("span",null,"\u9000\u623f\u6642\u9593")),n.a.createElement(d.a,{xs:"8"},n.a.createElement(_.a,{type:"text",readOnly:!0,value:this.state.selectedEndDay?this.state.selectedEndDay.toLocaleDateString():"Please select a day"})))))),n.a.createElement(d.a,{xs:"5"},n.a.createElement(p.a,{className:"selectRow"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"5"},n.a.createElement("span",null,"\u5ba2\u623f")),n.a.createElement(d.a,{xs:"7"},n.a.createElement(_.a,{type:"select",name:"select",onChange:this.selectRoomNum,value:this.state.roomNum},n.a.createElement("option",{value:"0"},"0\u9593"),n.a.createElement("option",{value:"1"},"1\u9593"),n.a.createElement("option",{value:"2"},"2\u9593"))))),n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"5"},n.a.createElement("span",null,"\u6210\u4eba")),n.a.createElement(d.a,{xs:"7"},n.a.createElement(_.a,{type:"select",name:"select",value:this.state.adultNum,onChange:this.selectAdult},n.a.createElement("option",{value:"0"},"0\u4eba"),n.a.createElement("option",{value:"1"},"1\u4eba"),n.a.createElement("option",{value:"2"},"2\u4eba"),n.a.createElement("option",{value:"3"},"3\u4eba"),n.a.createElement("option",{value:"4"},"4\u4eba"),n.a.createElement("option",{value:"5"},"5\u4eba"))))),n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"5"},n.a.createElement("span",null,"\u5c0f\u5b69")),n.a.createElement(d.a,{xs:"7"},n.a.createElement(_.a,{disabled:this.state.hotelRoomData&&!this.state.hotelRoomData.amenities["Child-Friendly"],type:"select",name:"select",value:this.state.childNum,onChange:this.selectChild},n.a.createElement("option",{value:"0"},"0\u4eba"),n.a.createElement("option",{value:"1"},"1\u4eba"),n.a.createElement("option",{value:"2"},"2\u4eba"),n.a.createElement("option",{value:"3"},"3\u4eba"),n.a.createElement("option",{value:"4"},"4\u4eba"),n.a.createElement("option",{value:"5"},"5\u4eba")))))))),n.a.createElement(p.a,null,n.a.createElement(d.a,{xs:"8"},n.a.createElement(p.a,null,n.a.createElement(d.a,null,n.a.createElement(M.a,{selectedDays:this.state.selectedStartDay,onDayClick:this.handleStartDayClick,disabledDays:[{before:new Date}]})),n.a.createElement(d.a,null,n.a.createElement(M.a,{selectedDays:this.state.selectedEndDay,onDayClick:this.handleEndDayClick,disabledDays:[{before:e}]})))),n.a.createElement(d.a,{xs:"4"},n.a.createElement(p.a,{className:"priceRow"},"\u7e3d\u50f9  NT ",this.state.hotelRoomData?this.state.roomNum*(this.state.holiday*this.state.hotelRoomData.holidayPrice+this.state.normalDay*this.state.hotelRoomData.normalDayPrice):"",n.a.createElement("span",null)," "),n.a.createElement(p.a,{className:"detailRow"},n.a.createElement(d.a,{xs:"5"},n.a.createElement("div",null,"- wifi: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Wi-Fi"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u65e9\u9910: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities.Breakfast?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u96fb\u8996: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities.Television?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u7a7a\u8abf: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Air-Conditioner"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u51b0\u7bb1: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities.Refrigerator?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u6c99\u767c: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities.Sofa?"\u6709":"\u7121":"")),n.a.createElement(d.a,{xs:"7"},n.a.createElement("div",null,"- \u6f02\u4eae\u7684\u8996\u91ce: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Great-View"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u7981\u6b62\u5438\u83f8: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Smoke-Free"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u9069\u5408\u5152\u7ae5: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Child-Friendly"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- \u5bf5\u7269\u651c\u5e36: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Pet-Friendly"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- Mini Bar: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Mini-Bar"]?"\u6709":"\u7121":""),n.a.createElement("div",null,"- Room Service: ",this.state.hotelRoomData?this.state.hotelRoomData.amenities["Room-Service"]?"\u6709":"\u7121":""))))),n.a.createElement(p.a,{className:"describeRow"},n.a.createElement(d.a,{xs:"9"},n.a.createElement(p.a,null,this.state.hotelRoomData?this.state.hotelRoomData.description:""),n.a.createElement(p.a,{className:"checkInProgress"},n.a.createElement(d.a,{xs:"3"},"checkIn\u6642\u9593"),n.a.createElement(d.a,{xs:"9"},n.a.createElement("span",{className:"checkInear"},this.state.hotelRoomData?this.state.hotelRoomData.checkInAndOut.checkInEarly:""),n.a.createElement(X.a,{multi:!0},n.a.createElement(X.a,{bar:!0,value:this.state.checkInEarly/24*100}),n.a.createElement(X.a,{bar:!0,value:(this.state.checkInLate-this.state.checkInEarly)/24*100}),n.a.createElement(X.a,{bar:!0,value:(24-this.state.checkInLate)/24*100})),n.a.createElement("span",{className:"checkInlate"},this.state.hotelRoomData?this.state.hotelRoomData.checkInAndOut.checkInLate:""))),n.a.createElement(p.a,{className:"checkOutProgress"},n.a.createElement(d.a,{xs:"3"},"checkOut\u6642\u9593"),n.a.createElement(d.a,{xs:"9"},n.a.createElement("span",{id:"checkOut"},this.state.hotelRoomData?this.state.hotelRoomData.checkInAndOut.checkOut:""),n.a.createElement(X.a,{multi:!0},n.a.createElement(X.a,{bar:!0,value:this.state.checkOut/24*100}),n.a.createElement(X.a,{bar:!0,value:(24-this.state.checkOut)/24*100}))))),n.a.createElement(d.a,{xs:"3"},n.a.createElement(U.a,null,n.a.createElement(V.a,null,n.a.createElement(W.a,null,"\u5e8a\u578b : ",this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.Bed[0]:""),n.a.createElement(W.a,null,"\u623f\u5ba2\u4eba\u6578\u9650\u5236 : ",this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.GuestMin:""," ~ ",this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.GuestMax:""," \u4eba "),n.a.createElement(W.a,null,"\u885b\u6d74\u6578\u91cf : ",this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort["Private-Bath"]:""," \u9593"),n.a.createElement(W.a,null,"\u623f\u9593\u5927\u5c0f : ",this.state.hotelRoomData?this.state.hotelRoomData.descriptionShort.Footage:""," \u5e73\u65b9\u516c\u5c3a"),n.a.createElement(W.a,null,"\u5047\u65e5(\u4e94-\u65e5)\u50f9\u683c : ",this.state.hotelRoomData?this.state.hotelRoomData.holidayPrice:""),n.a.createElement(W.a,null,"\u5e73\u65e5(\u4e00-\u56db)\u50f9\u683c : ",this.state.hotelRoomData?this.state.hotelRoomData.normalDayPrice:""))))))))}}]),t}(l.Component),z=a(78),H=a(79),J=a(80),K=a(81),Y=a(82),Z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={roomDetail:a.props.location.state},a}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"reservationDetail"},n.a.createElement("div",{className:"topArea"},n.a.createElement(F,null),n.a.createElement("div",{className:"content"},n.a.createElement("h3",{className:"content_title"},"\uff0e\u8a02\u55ae\u5167\u5bb9"),n.a.createElement(p.a,{className:"firstRow"},n.a.createElement(d.a,{xs:"5"},n.a.createElement("img",{src:this.state.roomDetail.roomImg,alt:"roomImg"})),n.a.createElement(d.a,{xs:"7"},n.a.createElement(p.a,{className:"firstRow_title"},n.a.createElement(d.a,{xs:"9"},n.a.createElement("span",{className:"hotTag"},"HOT"),n.a.createElement("span",null,"\u623f\u578b\u540d\u7a31 : ",this.state.roomDetail.roomName)),n.a.createElement(d.a,{xs:"3"},n.a.createElement(r.b,{className:"linkButton",to:"/innerPage/".concat(this.state.roomDetail.id)},n.a.createElement("button",null,"\u53d6\u6d88")))),n.a.createElement(p.a,{className:"firstRow_detail"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement("span",null,"\u5165\u4f4f\u65e5\u671f : ",this.state.roomDetail.startDay.getFullYear()," \u5e74 ",this.state.roomDetail.startDay.getMonth()+1," \u6708 ",this.state.roomDetail.startDay.getDate()," \u65e5 ~",this.state.roomDetail.endDay.getFullYear()," \u5e74 ",this.state.roomDetail.endDay.getMonth()+1," \u6708 ",this.state.roomDetail.endDay.getDate()," \u65e5 ")),n.a.createElement(p.a,null,n.a.createElement("span",null,"\u5165\u4f4f\u4eba\u6578 : ",this.state.roomDetail.totalPeople)),n.a.createElement(p.a,{className:"firstRow_detail_price"},n.a.createElement("span",null,"\u4e0d\u542b\u65e9\u9910"),n.a.createElement(p.a,{className:"priceRow"},"\u7e3d\u50f9 NT",this.state.roomDetail.totalPrice,n.a.createElement("span",null))),n.a.createElement(p.a,null,this.state.roomDetail.description))))),n.a.createElement(z.a,null,n.a.createElement(H.a,null,n.a.createElement(J.a,{for:"exampleEmail"},"Input without validation"),n.a.createElement(_.a,null),n.a.createElement(K.a,null,"You will not be able to see this"),n.a.createElement(Y.a,null,"Example help text that remains unchanged.")),n.a.createElement(H.a,null,n.a.createElement(J.a,{for:"exampleEmail"},"Valid input"),n.a.createElement(_.a,{valid:!0}),n.a.createElement(K.a,{valid:!0},"Sweet! that name is available"),n.a.createElement(Y.a,null,"Example help text that remains unchanged.")),n.a.createElement(H.a,null,n.a.createElement(J.a,{for:"examplePassword"},"Invalid input"),n.a.createElement(_.a,{invalid:!0}),n.a.createElement(K.a,null,"Oh noes! that name is already taken"),n.a.createElement(Y.a,null,"Example help text that remains unchanged.")),n.a.createElement(H.a,null,n.a.createElement(J.a,{for:"exampleEmail"},"Input without validation"),n.a.createElement(_.a,null),n.a.createElement(K.a,{tooltip:!0},"You will not be able to see this"),n.a.createElement(Y.a,null,"Example help text that remains unchanged.")),n.a.createElement(H.a,null,n.a.createElement(J.a,{for:"exampleEmail"},"Valid input"),n.a.createElement(_.a,{valid:!0}),n.a.createElement(K.a,{valid:!0,tooltip:!0},"Sweet! that name is available"),n.a.createElement(Y.a,null,"Example help text that remains unchanged.")),n.a.createElement(H.a,null,n.a.createElement(J.a,{for:"examplePassword"},"Invalid input"),n.a.createElement(_.a,{invalid:!0}),n.a.createElement(K.a,{tooltip:!0},"Oh noes! that name is already taken"),n.a.createElement(Y.a,null,"Example help text that remains unchanged."))))))}}]),t}(l.Component);var $=function(){return n.a.createElement(r.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(c.a,{exact:!0,path:"/",component:I}),n.a.createElement(c.a,{path:"/innerPage/:id",component:q}),n.a.createElement(c.a,{path:"/reservationDetail",component:Z})),n.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);o.a.render(n.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.130bddd3.chunk.js.map